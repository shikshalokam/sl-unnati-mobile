import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService, LoaderService, ToastMessageService, NetworkService } from '../core';
import { environment } from 'src/environments/environment';
import { File } from "@ionic-native/file/ngx";
import { Platform } from "@ionic/angular";
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DomSanitizer } from "@angular/platform-browser";
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-attachment-list',
  templateUrl: './attachment-list.page.html',
  styleUrls: ['./attachment-list.page.scss'],
})
export class AttachmentListPage implements OnInit {
  private win: any = window;
  attachments = [];
  projectId;
  path;
  type = "images";
  tabs = [
    {
      name: "LABELS.IMAGES",
      value: "images",
      type: 'image/jpeg'
    },
    {
      name: "LABELS.FILES",
      value: "files",
      type: "application/pdf"
    }
  ];
  project;
  projectcopy;
  constructor(
    private route: ActivatedRoute,
    private db: DbService,
    private loader: LoaderService,
    private file: File,
    private platform: Platform,
    private toast: ToastMessageService,
    public transfer: FileTransfer,
    public fileOpener: FileOpener,
    private sanitizer: DomSanitizer,
    private photoViewer: PhotoViewer,
    private network: NetworkService,
    private document: DocumentViewer
  ) {
    route.params.subscribe(params => {
      this.projectId = params.projectId;
    })
  }

  ngOnInit() {
    this.path = this.platform.is("ios") ? this.file.documentsDirectory : this.file.externalDataDirectory;
  }

  ionViewWillEnter() {
    this.getAttachments(this.tabs[0]);
  }

  segmentChanged(event) {
    this.type = event.detail.value;
    this.getAttachments(this.type === 'images' ? this.tabs[0] : this.tabs[1])
  }
  getAttachments(tab) {
    this.attachments = [];
    this.db.createPouchDB(environment.db.projects)
    this.db.query({ _id: this.projectId }).then(success => {
      this.project = success.docs.length ? success.docs[0] : {};
      this.projectcopy = { ...this.project }
      if (this.project.tasks && this.project.tasks.length) {
        for (const task of this.project.tasks) {
          const attachments = []
          if (task.attachments && task.attachments.length) {
            for (const element of task.attachments) {
              if (element.type === tab.type) {
                element.localUrl = this.win.Ionic.WebView.convertFileSrc(this.platform.is("ios") ? this.file.documentsDirectory : this.file.externalDataDirectory + element.name);
                attachments.push(element)
              }
            }
            if (attachments.length) {
              let attachmentObj = {
                taskName: task.name,
                attachments: attachments
              }
              this.attachments.push({ ...attachmentObj });
            }

          }
        };
      }
    }, error => {
    })
  }

  getImgContent(file) {
    return this.sanitizer.bypassSecurityTrustUrl(file);
  }


  viewDocument(attachment) {
    if (attachment.url) {
      if (this.network.isNetworkAvailable) {
        this.downloadFile(attachment);
      } else {
        this.toast.showMessage('MESSAGES.OFFLINE', 'danger');
      }
    } else {
      this.openFile(attachment);
    }
  }
  downloadFile(attachment) {
    this.loader.startLoader();
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(attachment.url, this.path + '/' + attachment.name).then(success => {
      this.openFile(attachment)
      this.loader.stopLoader();
    }).catch(error => {
      this.loader.stopLoader();
    });
  }
  openImage(attachment) {
    this.network.isNetworkAvailable ? this.photoViewer.show(attachment) : this.toast.showMessage('MESSAGES.OFFLINE', 'danger');
  }
  openFile(attachment) {
    this.fileOpener.open(this.path + '/' + attachment.name, attachment.type)
      .then(() => { console.log('File is opened'); })
      .catch(e => console.log('Error opening file', e));
  }
}
