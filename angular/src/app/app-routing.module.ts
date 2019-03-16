import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from 'src/app/index/index.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
