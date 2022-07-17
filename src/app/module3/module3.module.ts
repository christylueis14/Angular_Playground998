import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module3RoutingModule } from './module3-routing.module';
import { M3cComponent } from './m3c/m3c.component';
import { M3c2Component } from './m3c2/m3c2.component';
import { M3c3Component } from './m3c3/m3c3.component';


@NgModule({
  declarations: [
    M3cComponent,
    M3c2Component,
    M3c3Component
  ],
  imports: [
    CommonModule,
    Module3RoutingModule
  ]
})
export class Module3Module { }
