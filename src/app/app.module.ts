import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TimeEntriesProvider } from '../providers/time-entries/time-entries';
import { TimeCardComponent } from '../components/time-card/time-card';
import {MdDatepickerModule, MdInputModule, MdNativeDateModule} from "@angular/material";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TimeCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MdDatepickerModule,
    MdNativeDateModule,
    MdInputModule,
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TimeEntriesProvider
  ]
})
export class AppModule {}
