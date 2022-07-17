import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module4RoutingModule } from './module4-routing.module';
import { M4c1Component } from './m4c1/m4c1.component';
import { M4c2Component } from './m4c2/m4c2.component';
import { M4c3Component } from './m4c3/m4c3.component';


@NgModule({
  declarations: [
    M4c1Component,
    M4c2Component,
    M4c3Component
  ],
  imports: [
    CommonModule,
    Module4RoutingModule
  ]
})
export class Module4Module { }
