import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { File } from '@ionic-native/file';
import { Base64 } from '@ionic-native/base64/ngx';
import { ToastService } from '../toast.service';
import { CreateProjectService } from '../create-project/create-project.service';
import { MyReportsService } from '../my-reports/my-reports.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';

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
  images = [];
  appFolderPath;
  isIos;
  files = [];
  file;
  imageUrl;
  remarks;
  fileUrl;
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
  ) {
    this.platform.ready().then(() => {
      this.isIos = this.platform.is('ios') ? true : false;
      this.appFolderPath = this.isIos ? cordova.file.documentsDirectory + 'projects' : cordova.file.externalDataDirectory + 'projects';
    })
  }
  ngOnInit() {
    console.log(this.data, "data");
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
    console.log(this.formContent, "formContent");
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
    console.log(this.data, " data ");
    this.data.formData.forEach(element => {
      if (element.type != 'attachment') {
        obj[element.field] = element.value;
      }
    });
    console.log(obj, "obj");
    if (obj.title) {
      this.data.projectData.tasks = obj;
      console.log(this.data.projectData, "this.data.projectData");
      this.toastService.startLoader('Loading, please wait');
      this.createProjectService.getTaskPDF(this.data.projectData).subscribe(data => {
        console.log(data, "resp");
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

  attachFile(imageInput: any) {
    if (this.attachments.length < 4) {
      let value;
      const file: File = imageInput.files[0];
      this.file = file;
      console.log(this.file, "this.file");
      const reader = new FileReader();
      reader.onload = (event: any) => {
        value = event.target.result.split(',');
        if (this.file.type == "image/jpeg" || this.file.type == "image/png") {
          let data = {
            data: value[1],
            name: this.file.name,
            type: this.file.type
          }
          this.images.push(data);
          this.attachments.push(data);
        } else {
          let data = {
            data: event.target.result,
            name: this.file.name,
            type: this.file.type
          }
          this.files.push(data);
          this.attachments.push(data);
        }
        console.log(this.images, "this.images", this.files, "this.files");
      };
      reader.readAsDataURL(file);
    } else {
      this.toastService.errorToast('Only 4 files are allowed to upload.')
    }
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
    this.images = [];
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
    console.log(this.data, " data ");
    this.data.formData.forEach(element => {
      if (element.type != 'attachment') {
        obj[element.field] = element.value;
      }
    });
    console.log(obj, "obj", obj.title);
    if (obj.title) {
      this.createProjectService.addNewTaskIntoProject(obj);
      this.close();
    } else {
      this.submitAttempt = true;
    }
  }

  public sharePdf(data) {
    console.log(data, "in share ()");

    this.toastService.startLoader('Loading Please wait');
    const fileName = 'Report';
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = data.pdfUrl;
    fileTransfer.download(url, this.appFolderPath + '/' + fileName).then((entry) => {
      this.base64.encodeFile(entry.nativeURL).then((base64File: string) => {
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

}