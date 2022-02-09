import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './assignment1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './assignment1/success-alert/success-alert.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { FormsModule } from '@angular/forms';
import { Assignment3Component } from './assignment3/assignment3.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Assignment2Component,
    Assignment3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
