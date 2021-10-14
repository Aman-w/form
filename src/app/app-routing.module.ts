import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    loadChildren: () => import('./pages/employees/employees.module').then( m => m.EmployeesPageModule)
  },

  {
    path: 'add/:id',
    loadChildren: () => import('./pages/employees/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./pages/employees/edit/edit.module').then( m => m.EditPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
