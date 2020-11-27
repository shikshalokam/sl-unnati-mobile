import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SyncSettingsComponent } from "../sync-settings/sync-settings.component";

import { MenuPage } from "./menu.page";

const routes: Routes = [
  {
    path: "",
    component: MenuPage,
    children: [
      {
        path: "",
        loadChildren: () => import("../tabs/tabs.module").then((m) => m.TabsPageModule),
      },
      {
        path: "settings",
        loadChildren: () => import("../settings/settings.module").then((m) => m.SettingsPageModule),
      },
      {
        path: "tutorial-videos",
        loadChildren: () => import("../tutorial-videos/tutorial-videos.module").then((m) => m.TutorialVideosPageModule),
      },
      {
        path: "notification",
        loadChildren: () => import("../notification/notification.module").then((m) => m.NotificationPageModule),
      },
      {
        path: "about",
        loadChildren: () => import("../about/about.module").then((m) => m.AboutPageModule),
      },
      {
        path: "schoolreport/:id/:name",
        loadChildren: () => import("../school-reports/school-reports.module").then((m) => m.SchoolReportsPageModule),
      },
      {
        path: "project-detail/:id",
        loadChildren: () => import("../project-detail/project-detail.module").then((m) => m.ProjectDetailPageModule),
      },
      {
        path: "template-view/:id",
        loadChildren: () => import("../template-view/template-view.module").then((m) => m.TemplateViewPageModule),
      },
      {
        path: 'my-projects',
        loadChildren: () => import('../my-projects/my-projects.module').then(m => m.MyProjectsPageModule)
      },
      {
        path: 'sync',
        loadChildren: () => import('../sync/sync.module').then(m => m.SyncPageModule)
      },
      {
        path: "templates/:type",
        loadChildren: () => import("../templates/templates.module").then((m) => m.TemplatesPageModule),
      },
      {
        path: "project-operation/:id",
        loadChildren: () =>
          import("../project-operation/project-operation.module").then((m) => m.ProjectOperationPageModule),
      },
      {
        path: "my-projects",
        loadChildren: () => import("../my-projects/my-projects.module").then((m) => m.MyProjectsPageModule),
      },
      {
        path: "create-project",
        loadChildren: () => import("../create-project/create-project.module").then((m) => m.CreateProjectPageModule),
      },
      {
        path: "learning-resources/:id/:taskId",
        loadChildren: () =>
          import("../learning-resources/learning-resources.module").then((m) => m.LearningResourcesPageModule),
      },
      {
        path: "learning-resources/:id",
        loadChildren: () =>
          import("../learning-resources/learning-resources.module").then((m) => m.LearningResourcesPageModule),
      },
      {
        path: "full-report",
        loadChildren: () => import("../full-report/full-report.module").then((m) => m.FullReportModule),
      },
      {
        path: "task-view/:projectId/:taskId",
        loadChildren: () => import("../task-view/task-view.module").then((m) => m.TaskViewPageModule),
      },
      {
        path: "syncsettings",
        component: SyncSettingsComponent,
      },
      {
        path: 'project-edit/:projectId',
        loadChildren: () => import('../project-edit/project-edit.module').then(m => m.ProjectEditPageModule)
      }, {
        path: 'attachment-list/:projectId',
        loadChildren: () => import('../attachment-list/attachment-list.module').then(m => m.AttachmentListPageModule)
      },
      {
        path: 'profile-update',
        loadChildren: () => import('../profile-update/profile-update.module').then( m => m.ProfileUpdatePageModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
