import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { MaterialModule } from './material/material.module';
import { MAT_DATE_LOCALE } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { GetSolutionComponent } from './get-solution/get-solution.component';
import { GetSolutionFormComponent } from './get-solution/get-solution-form/get-solution-form.component';
import { GetSolutionProgressComponent } from './get-solution/get-solution-progress/get-solution-progress.component';
import { GetSolutionSolutionComponent } from './get-solution/get-solution-solution/get-solution-solution.component';
import { GetSolutionToggleComponent } from './get-solution/get-solution-form/get-solution-toggle/get-solution-toggle.component';
import { GetSolutionNotesComponent } from './get-solution/get-solution-form/get-solution-notes/get-solution-notes.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GetSolutionComponent,
    GetSolutionFormComponent,
    GetSolutionProgressComponent,
    GetSolutionSolutionComponent,
    GetSolutionToggleComponent,
    GetSolutionNotesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'unitn-statistica' }),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    NgxWebstorageModule.forRoot(),
    AppRoutingModule,
    Angulartics2Module.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
