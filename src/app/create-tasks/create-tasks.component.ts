import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { File } from '@ionic-native/file/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { ToastService } from '../toast.service';
import { CreateProjectService } from '../create-project/create-project.service';
import { MyReportsService } from '../my-reports/my-reports.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';
import { FilePath } from '@ionic-native/file-path/ngx';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

declare var cordova: any;

@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrls: ['./create-tasks.component.scss'],
})
export class CreateTasksComponent implements OnInit {
  @Input() data;
  task: any = {};
  submitAttempt: boolean = false;
  attachments = [];
  appFolderPath;
  isIos;
  files = [];
  showForm: boolean = false
  formContent: FormGroup;
  constructor(
    private base64: Base64,
    public datepipe: DatePipe,
    public datePicker: DatePicker,
    public toastService: ToastService,
    public createProjectService: CreateProjectService,
    public myReportsService: MyReportsService,
    public socialSharing: SocialSharing,
    public platform: Platform,
    public transfer: FileTransfer,
    public iosFilePicker: IOSFilePicker,
    public fileChooser: FileChooser,
    public filePath: FilePath,
    public file: File
  ) {
    this.platform.ready().then(() => {
      this.isIos = this.platform.is('ios') ? true : false;
      this.appFolderPath = this.isIos ? cordova.file.documentsDirectory + 'attachments' : cordova.file.externalDataDirectory + 'attachments';
    })
  }
  ngOnInit() {
    if (this.data) {
      this.prepareForm();
    }
  }



  public prepareForm() {
    const controls = {};
    this.data.formData.forEach(res => {
      const validationsArray = [];
      if (res.required) {
        validationsArray.push(
          Validators.required
        );
      }
      controls[res.field] = new FormControl('', validationsArray);
    });
    this.formContent = new FormGroup(
      controls
    );
    this.showForm = true;
  }

  public share() {
    let files = [];
    this.attachments.forEach(element => {
      let data = {
        name: element.name
      }
      files.push(data);
    });
    let obj: any = {
      attachments: files,
      subTasks: []
    }
    this.data.formData.forEach(element => {
      if (element.type != 'attachment') {
        obj[element.field] = element.value;
      }
    });
    if (obj.title) {
      this.data.projectData.tasks = obj;
      this.toastService.startLoader('Loading, please wait');
      this.createProjectService.getTaskPDF(this.data.projectData).subscribe(data => {
        this.toastService.stopLoader();
        this.sharePdf(data);
      })
    } else {
      this.submitAttempt = true;
    }
  }
  public setDate(endDate) {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        endDate.value = this.datepipe.transform(new Date(date));
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  action(role) {
    switch (role) {
      case 'submit': {
        this.add();
        break;
      }
    }
  }
  close() {
    this.submitAttempt = false;
    this.data = [];
    this.attachments = [];
    this.files = [];
    this.showForm = false;
    this.createProjectService.closeModal();
  }

  add() {
    let obj: any = {
      attachments: this.attachments,
      subTasks: [],
      status: 'Not started',
      isNew: true,
      projectId: this.data.projectData.projectId
    }
    this.data.formData.forEach(element => {
      if (element.type != 'attachment') {
        obj[element.field] = element.value;
      }
    });
    if (obj.title) {
      this.createProjectService.addNewTaskIntoProject(obj);
      this.close();
    } else {
      this.submitAttempt = true;
    }
  }

  public sharePdf(data) {
    this.toastService.startLoader('Loading Please wait');
    const fileName = 'Unnati Task';
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = data.pdfUrl;
    fileTransfer.download(url, this.appFolderPath + '/' + fileName).then((entry) => {
      let fileName1 = entry.nativeURL.split('/').pop();
      let path = entry.nativeURL.substring(0, entry.nativeURL.lastIndexOf("/") + 1);
      this.file.readAsDataURL(path, fileName)
        .then(base64File => {
          // this.base64.encodeFile(entry.nativeURL).then((base64File: string) => {
          let data = base64File.split(',');
          let base64Data = "data:application/pdf;base64," + data[1];
          this.socialSharing.share("", fileName, base64Data, "").then((data) => {
            this.toastService.stopLoader();
          }, error => {
            this.toastService.stopLoader();
            // intentially left blank
          });
        }, (err) => {
          this.toastService.stopLoader();
        });
    }, (error) => {
      this.toastService.stopLoader();
    });
  }
  chooseFile() {
    if (this.attachments.length < 4) {
      this.isIos ? this.filePickerForIOS() : this.openFilePicker();
    } else {
      this.toastService.errorToast('Only 4 files you can add.')
    }
  }

  filePickerForIOS() {
    this.iosFilePicker.pickFile().then(data => {
      let correctPath = data.substr(0, data.lastIndexOf('/') + 1);
      let currentName = data.substring(data.lastIndexOf('/') + 1);
      let fileMIMEType = this.getMIMEtype(currentName.substring(currentName.lastIndexOf('.') + 1))
      if (fileMIMEType) {
        let fileData = {
          name: currentName,
          type: fileMIMEType,
          isNew: true
        }
        this.checkInLocal("file://" + data, currentName, fileData);
      } else {
        this.toastService.errorToast('Sorry,Please attach image or pdf.')
      }
    }).catch(error => {
    })
  }

  // For android
  openFilePicker() {
    this.fileChooser.open()
      .then(filePath => {
        this.filePath.resolveNativePath(filePath).then(imageData => {
          let correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
          let currentName = imageData.substring(imageData.lastIndexOf('/') + 1);
          let fileMIMEType = this.getMIMEtype(currentName.substring(currentName.lastIndexOf('.') + 1))
          if (fileMIMEType) {
            let fileData = {
              name: currentName,
              type: fileMIMEType,
              isNew: true
            }
            this.checkInLocal(imageData, currentName, fileData);
          } else {
            this.toastService.errorToast('Sorry,Please attach image or pdf.')
          }
        }).catch(err => {
        })
      })
      .catch(e => console.log(e));
  }

  getMIMEtype(extn) {
    let ext = extn.toLowerCase();
    let MIMETypes = {
      'pdf': 'application/pdf',
      'jpg': 'image/jpeg',
      'bmp': 'image/bmp',
      'png': 'image/png',
      'jpeg': 'image/jpeg',
      'gif': 'image/gif'
    }
    return MIMETypes[ext];
  }
  public saveFile(imageData, newFileName, newAttachment) {
    let currentPath = imageData.substr(0, imageData.lastIndexOf('/') + 1).toString();
    let currentName = imageData.substring(imageData.lastIndexOf('/') + 1, imageData.length).toString();
    if (this.isIos) {
      this.file.checkDir(this.file.documentsDirectory, 'attachments').then(_ => {
        this.file.copyFile(currentPath, currentName, this.appFolderPath, newFileName).then(success => {
          this.attachments.push(newAttachment);
          this.toastService.successToast('message.image_uploaded');
        }, error => {
          this.toastService.errorToast('Unable to upload ' + currentName + ' file.');
        });
      }).catch(err => {
        this.file.createDir(cordova.file.documentsDirectory, 'attachments', false).then(response => {
          this.file.copyFile(currentPath, currentName, this.appFolderPath, newFileName).then(success => {
            this.attachments.push(newAttachment);
            this.toastService.successToast('message.image_uploaded');
          }, error => {
            this.toastService.errorToast('Unable to upload ' + currentName + ' file.');
          });
        }).catch(err => {
        });
      });
    } else {
      this.file.checkDir(this.file.externalDataDirectory, 'attachments').then(_ => {
        this.file.copyFile(currentPath, currentName, this.appFolderPath, newFileName).then(success => {
          this.attachments.push(newAttachment);
          this.toastService.successToast('message.image_uploaded');
        }, error => {
          this.toastService.errorToast('Unable to upload ' + currentName + ' file.');
        });
      }).catch(err => {
        this.file.createDir(cordova.file.externalDataDirectory, 'attachments', false).then(response => {
          this.file.copyFile(currentPath, currentName, this.appFolderPath, newFileName).then(success => {
            this.attachments.push(newAttachment);
            this.toastService.successToast('message.image_uploaded');
          }, error => {
            this.toastService.errorToast('Unable to upload ' + currentName + ' file.');
          });
        }).catch(err => {
        });
      });
    }
  }
  checkInLocal(file, name, newAttachment) {
    let currentPath = file.substr(0, file.lastIndexOf('/') + 1).toString();
    let currentName = file.substring(file.lastIndexOf('/') + 1, file.length).toString();
    this.file.checkFile(currentPath, currentName).then(success => {
      this.saveFile(file, name, newAttachment);
    }, error => {
      currentName = currentName.trim();
      currentName = currentName.replace(/ /g, "_");
      this.file.checkFile(currentPath, currentName).then(success => {
        this.saveFile(file, name, newAttachment);
      }, error => {
        this.toastService.errorToast('Unable to upload ' + currentName + ' file.');
      })
    })
  }
}