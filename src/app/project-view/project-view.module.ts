import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectViewPage } from './project-view.page';
import { TasksPage } from '../tasks/tasks.page';
import { Keyboard } from '@ionic-native/keyboard/ngx';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ProjectViewPage,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'my-schools', loadChildren: '../myschools/myschools.module#MyschoolsPageModule' },
      { path: 'fullreports/:state', loadChildren: '../fullreports/fullreports.module#FullreportsPageModule' },
      { path: 'about', loadChildren: '../about/about.module#AboutPageModule' },
      { path: 'detail', loadChildren: '../detail/detail.module#DetailPageModule' },
      { path: 'detail/:id/:from', loadChildren: '../detail/detail.module#DetailPageModule' },
      { path: 'school-project-detail/:id', loadChildren: '../school-project-detail/school-project-detail.module#SchoolProjectDetailPageModule' },
      { path: 'projects', loadChildren: '../projects/projects.module#ProjectsPageModule' },
      { path: 'projects/:type', loadChildren: '../projects/projects.module#ProjectsPageModule' },
      { path: 'reports', loadChildren: '../reports/reports.module#ReportsPageModule' },
      { path: 'my-schools', loadChildren: '../myschools/myschools.module#MyschoolsPageModule' },
      { path: 'school-task-report/:id/:name', loadChildren: '../school-task-report/school-task-report.module#SchoolTaskReportPageModule' },
      { path: 'task-view', loadChildren: '../task-view/task-view.module#TaskViewPageModule' },
      { path: 'task-view/:projectId/:taskId/:from', loadChildren: '../task-view/task-view.module#TaskViewPageModule' },
      { path: 'subtasks', loadChildren: '../subtasks/subtasks.module#SubtasksPageModule' },
      { path: 'subtasks', loadChildren: '../subtasks/subtasks.module#SubtasksPageModule' },
      { path: 'subtask-status', loadChildren: '../subtask-status/subtask-status.module#SubtaskStatusPageModule' },
      { path: 'courses', loadChildren: '../courses/courses.module#CoursesPageModule' },
      { path: 'courses/:cat', loadChildren: '../courses/courses.module#CoursesPageModule' },
      { path: 'status/:id', loadChildren: '../charts/charts.module#ChartsPageModule' },
      { path: 'create-project', loadChildren: '../create-project/create-project.module#CreateProjectPageModule' },
      { path: 'create-project/:clearData', loadChildren: '../create-project/create-project.module#CreateProjectPageModule' },
      { path: 'create-task/:id/:from', loadChildren: '../create-task/create-task.module#CreateTaskPageModule' },
      { path: 'create-task/:id', loadChildren: '../create-task/create-task.module#CreateTaskPageModule' },
      { path: 'current-task/:id/:from', loadChildren: '../current-task-view/current-task-view.module#CurrentTaskViewPageModule' },
      { path: 'library', loadChildren: '../library/library.module#LibraryPageModule' },
      { path: 'category/:cat', loadChildren: '../category-view/category-view.module#CategoryViewPageModule' },
      { path: 'project-detail/:cat', loadChildren: '../project-detail/project-detail.module#ProjectDetailPageModule' },
      { path: 'project-detail', loadChildren: '../project-detail/project-detail.module#ProjectDetailPageModule' },
      { path: 'newsfeed', loadChildren: '../newsfeed/newsfeed.module#NewsfeedPageModule' },
      { path: 'my-reports', loadChildren: '../my-reports/my-reports.module#MyReportsPageModule' },
      { path: 'files/:id', loadChildren: '../files/files.module#FilesPageModule' },
      { path: 'notifications', loadChildren: '../notifications/notifications.module#NotificationsPageModule' },
      { path: 'task-board', loadChildren: '../task-board/task-board.module#TaskBoardPageModule' },
      { path: 'update-profile', loadChildren: '../update-profile/update-profile.module#UpdateProfilePageModule' },
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
    })
  ],
  declarations: [ProjectViewPage],
  providers: [ScreenOrientation, Keyboard]
})
export class ProjectViewPageModule { }