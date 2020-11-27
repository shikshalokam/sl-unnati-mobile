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
  path;
  type = "images";
  tabs = [
    {
      name: "LABELS.IMAGES",
      value: "images",
    },
    {
      name: "LABELS.FILES",
      value: "files",
    }
  ];
  project;
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
      this.getAttachments(params.projectId);
    })
  }

  ngOnInit() {
    this.path = this.platform.is("ios") ? this.file.documentsDirectory : this.file.externalDataDirectory;
  }

  segmentChanged(event) {
    this.type = event.detail.value;
  }
  getAttachments(projectId) {
    this.db.query({ _id: projectId }).then(success => {
      this.project = success.docs.length ? success.docs[0] : {};
      if (this.project.tasks && this.project.tasks.length) {
        this.project.tasks.forEach(task => {
          if (task.attachments && task.attachments.length) {
            task.attachments.forEach(element => {
              element.localUrl = this.win.Ionic.WebView.convertFileSrc(this.platform.is("ios") ? this.file.documentsDirectory : this.file.externalDataDirectory + element.name);
            });
            let attachment = {
              taskName: task.name,
              attachments: task.attachments
            }
            this.attachments.push(attachment);
          }
        });
      }
    }, error => {
    })
  }

  getImgContent(file) {
    return this.sanitizer.bypassSecurityTrustUrl(file);
  }


  viewDocument(attachment) {
    if (!attachment.url) {
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
