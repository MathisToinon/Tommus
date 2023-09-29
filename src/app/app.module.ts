import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { AssignmentDetailComponent } from './assignment/assignment-detail/assignment-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AssignmentDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
