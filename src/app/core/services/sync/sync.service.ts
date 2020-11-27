import { Injectable } from '@angular/core';
import { localStorageConstants, urlConstants } from '../../constants';
import { LoaderService } from '../loader/loader.service';
import { UnnatiDataService } from '../unnati/unnati-data.service';
import * as _ from 'underscore';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { NetworkService } from '../network/network.service';
import { Router } from '@angular/router';
import { ToastMessageService } from '../toast-messages/toast-message.service';
import { TranslateService } from '@ngx-translate/core';
import { DbService } from '../db/db.service';
import { environment } from 'src/environments/environment';
import { KendraApiService } from '../kendra-api/kendra-api.service';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  allStrings;
  isIos: boolean = false;
  fileBasePath;

  constructor(
    private unnatiServ: UnnatiDataService,
    private loader: LoaderService,
    private localStorage: LocalStorageService,
    private network: NetworkService,
    private router: Router,
    private toast: ToastMessageService,
    private translate: TranslateService,
    private db: DbService,
    private kendra: KendraApiService,
    private file: File,
    private fileTransfer: FileTransfer,
    private platform: Platform
  ) {

    this.translate.get(['MESSAGES.PLEASE_NETWORK']).subscribe(stringValues => {
      this.allStrings = stringValues;
    })
    this.isIos = this.platform.is('ios');
    this.fileBasePath = this.isIos ? this.file.documentsDirectory : this.file.externalDataDirectory;
  }


  checkForSync() {
    this.db.createPouchDB(environment.db.projects);
    //check if there is any unsynced data
    this.db.customQuery({
      selector: {
        $or: [
          { isNew: true },
          { isEdit: true },
        ]
      }
    }).then(success => {
      if (success['docs'].length) {
        //check the sync settings
        this.localStorage.getLocalStorage(localStorageConstants.SYNC_VARIABLE).then(status => {
          if (status === 'ON' && this.network.isNetworkAvailable) {
            this.router.navigate(['/menu/sync']);
          } else if (status === 'ON' && !this.network.isNetworkAvailable) {
            this.toast.showMessage(this.allStrings['MESSAGES.PLEASE_NETWORK'], 'danger')
          } else {
          }
        }).catch(error => {
          this.router.navigate(['/menu/sync']);
        })
      }
    })
  }

  syncApiRequest(payload, showLoader: boolean = false): Promise<any> {
    const obj = this.processPayload(payload);
    const { _id } = payload;
    delete payload._id;
    showLoader ? this.loader.startLoader() : null;
    const config = {
      url: urlConstants.API_URLS.SYNC_PROJECT + _id + `?lastDownloadedAt=${payload.lastDownloadedAt}`,
      payload: obj
    }
    return new Promise((resolve, reject) => {
      this.unnatiServ.post(config).subscribe(success => {
        showLoader ? this.loader.stopLoader() : null;
        resolve(success)
      }, error => {
        showLoader ? this.loader.stopLoader() : null;
        reject(error);
      })
    })
  }


  createNewProject(showLoader: boolean = false): Promise<any> {
    showLoader ? this.loader.startLoader() : null;
    const config = {
      url: urlConstants.API_URLS.CREATE_PROJECT_DOC
    }
    return new Promise((resolve, reject) => {
      this.unnatiServ.get(config).subscribe(success => {
        showLoader ? this.loader.stopLoader() : null;
        resolve(success)
      }, error => {
        showLoader ? this.loader.stopLoader() : null;
        reject(error);
      })
    })
  }

  removeKeys(doc, fields) {
    for (const field of fields) {
      delete doc[field]
      doc.tasks = this.deleteSpecificKey(doc.tasks, field)
    }
    return doc
  }

  deleteSpecificKey(tasks, key) {
    for (const task of tasks) {
      delete task[key];
      if (task.children && task.children.length) {
        for (const subTask of task.children) {
          delete subTask[key]
        }
      }
    }
    return tasks
  }

  getImageUploadUrls(projects): Promise<any> {
    const payload = { ...this.createImageUrlPayload(projects) }
    console.log(payload)
    return new Promise((resolve, reject) => {
      const config = {
        url: urlConstants.API_URLS.GET_IMAGE_UPLOAD_URLS,
        payload: payload
      }
      this.unnatiServ.post(config).subscribe(success => {
        resolve(success.result[projects._id].images)
        console.log(success);
      }, error => {
        reject(error);
        console.log(error)
      })
    })
  }

  createImageUrlPayload(project) {
    const payload = {};
    const completeImgObj = this.getAllAttachmentOfProject(project);
    const payloadImages = [];
    for (const image of completeImgObj) {
      payloadImages.push(image.name);
    }
    payload[project._id] = {
      images: payloadImages
    }
    return payload
  }

  getAllAttachmentOfProject(project) {
    let attachments = [];
    for (const task of project.tasks) {
      if (task.attachments && task.attachments.length) {
        for (const attachment of task.attachments) {
          !attachment['sourcePath'] ? attachments.push(attachment) : null;
        }
      }
    }
    return attachments
  }

  processPayload(payload) {
    delete payload._rev;
    delete payload.solutionInformation;
    delete payload.programInformation;
    delete payload.userId;
    return payload
  }


  cloudImageUpload(fileDetails) {
    return new Promise((resolve, reject) => {
      this.file.checkFile(this.fileBasePath, fileDetails.name).then(success => {
        var options = {
          fileKey: fileDetails.name,
          fileName: fileDetails.name,
          chunkedMode: false,
          mimeType: fileDetails.type,
          headers: {
            "Content-Type": "multipart/form-data",
            "x-ms-blob-type":
              fileDetails.cloudStorage === "AZURE"
                ? "BlockBlob"
                : null,
          },
          httpMethod: "PUT",
        };
        const fileTrans: FileTransferObject = this.fileTransfer.create();
        fileTrans.upload(this.fileBasePath + fileDetails.name, fileDetails.uploadUrl, options).then(success => {
          resolve(success)
        }).catch(error => {
          reject(error)
        })
      }).catch(error => {
        reject(error)
      })
    })
  }


}
