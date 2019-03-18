import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdsenseModule } from 'ng2-adsense';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { MAT_DATE_LOCALE } from '@angular/material';
import { GetSolutionComponent } from './get-solution/get-solution.component';
import { GetSolutionFormComponent } from './get-solution/get-solution-form/get-solution-form.component';
import { GetSolutionProgressComponent } from './get-solution/get-solution-progress/get-solution-progress.component';
import { GetSolutionSolutionComponent } from './get-solution/get-solution-solution/get-solution-solution.component';
import { GetSolutionAdsenseComponent } from './get-solution/get-solution-adsense/get-solution-adsense.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GetSolutionComponent,
    GetSolutionFormComponent,
    GetSolutionProgressComponent,
    GetSolutionSolutionComponent,
    GetSolutionAdsenseComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'unitn-statistica' }),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-8122958180407711',
      adSlot: 7259870550,
    }),
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
