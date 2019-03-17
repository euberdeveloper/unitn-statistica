import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { MAT_DATE_LOCALE } from '@angular/material';
import { GetSolutionComponent } from './get-solution/get-solution.component';
import { GetSolutionFormComponent } from './get-solution-form/get-solution-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GetSolutionComponent,
    GetSolutionFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
