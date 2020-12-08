import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttachmentListPageRoutingModule } from './attachment-list-routing.module';

import { AttachmentListPage } from './attachment-list.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CoreModule,
    IonicModule,
    AttachmentListPageRoutingModule,
    TranslateModule.forChild()

  ],
  providers: [FileOpener,PhotoViewer,DocumentViewer],
  declarations: [AttachmentListPage]
})
export class AttachmentListPageModule { }
