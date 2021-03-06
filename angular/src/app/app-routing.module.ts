import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { GetSolutionComponent } from './get-solution/get-solution.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'get-solution', component: GetSolutionComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
