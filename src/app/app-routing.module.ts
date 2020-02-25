import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/project-view/home',
  //   pathMatch: 'full'
  // },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsPageModule' },
  { path: 'project-view', loadChildren: './project-view/project-view.module#ProjectViewPageModule' },
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksPageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'resources', loadChildren: './charts/charts.module#ChartsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'task-view/:projectId/:taskId/:from', loadChildren: './task-view/task-view.module#TaskViewPageModule' },
  { path: 'courses', loadChildren: './courses/courses.module#CoursesPageModule' },
  { path: 'subtasks', loadChildren: './subtasks/subtasks.module#SubtasksPageModule' },
  { path: 'subtask-view', loadChildren: './subtask-view/subtask-view.module#SubtaskViewPageModule' },
  { path: 'subtask-view/:subtaskId/:taskId/:projectId/:from', loadChildren: './subtask-view/subtask-view.module#SubtaskViewPageModule' },
  { path: 'my-schools', loadChildren: './myschools/myschools.module#MyschoolsPageModule' },
  { path: 'school-task-report/:id', loadChildren: './school-task-report/school-task-report.module#SchoolTaskReportPageModule' },
  { path: 'reports', loadChildren: './reports/reports.module#ReportsPageModule' },
  { path: 'subtask-status/:id', loadChildren: './subtask-status/subtask-status.module#SubtaskStatusPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'my-reports', loadChildren: './my-reports/my-reports.module#MyReportsPageModule' },
  { path: 'last-month-reports', loadChildren: './last-month-reports/last-month-reports.module#LastMonthReportsPageModule' },
  { path: 'last-quarter-reports', loadChildren: './last-quarter-reports/last-quarter-reports.module#LastQuarterReportsPageModule' },
  { path: 'fullreports/:state', loadChildren: './fullreports/fullreports.module#FullreportsPageModule' },
  { path: 'school-project-detail/:id', loadChildren: './school-project-detail/school-project-detail.module#SchoolProjectDetailPageModule' },
  { path: 'create-project', loadChildren: './create-project/create-project.module#CreateProjectPageModule' },
  { path: 'library', loadChildren: './library/library.module#LibraryPageModule' },
  { path: 'create-task', loadChildren: './create-task/create-task.module#CreateTaskPageModule' },
  { path: 'newsfeed', loadChildren: './newsfeed/newsfeed.module#NewsfeedPageModule' },
  { path: 'current-task-view', loadChildren: './current-task-view/current-task-view.module#CurrentTaskViewPageModule' },
  { path: 'category-view', loadChildren: './category-view/category-view.module#CategoryViewPageModule' },
  { path: 'project-detail', loadChildren: './project-detail/project-detail.module#ProjectDetailPageModule' },
  { path: 'active-projects', loadChildren: './active-projects/active-projects.module#ActiveProjectsPageModule' },
  { path: 'my-projects', loadChildren: './my-projects/my-projects.module#MyProjectsPageModule' },
  { path: 'all-projects', loadChildren: './all-projects/all-projects.module#AllProjectsPageModule' },
  { path: 'files/:id', loadChildren: './files/files.module#FilesPageModule' },
  { path: 'task-board', loadChildren: './task-board/task-board.module#TaskBoardPageModule' },
  { path: 'kclg', loadChildren: './kclg/kclg.module#KclgPageModule' },
  { path: 'update-profile', loadChildren: './update-profile/update-profile.module#UpdateProfilePageModule' },
  { path: 'tutorial-videos', loadChildren: './tutorial-videos/tutorial-videos.module#TutorialVideosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
