import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';
import { Module5Component } from './module5/module5.component';
import {HttpClientModule }from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    Module5Component,
    
  ],
  imports: [
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModule,
    HttpClientModule,MatProgressBarModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule
  ],
  exports:[MatFormFieldModule,],
  providers: [
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
