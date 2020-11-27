import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'institutions',
        loadChildren: () => import('../institutions/institutions.module').then(m => m.InstitutionsPageModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsPageModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('../reports/reports.module').then(m => m.ReportsPageModule)
      },
      {
        path: 'lib-categories',
        loadChildren: () => import('../lib-categories/lib-categories.module').then(m => m.LibCategoriesPageModule)
      },
      {
        path: 'newsfeed',
        loadChildren: () => import('../newsfeed/newsfeed.module').then(m => m.NewsfeedPageModule)
      },
      {
        path: 'task-list',
        loadChildren: () => import('../task-list/task-list.module').then(m => m.TaskListPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
