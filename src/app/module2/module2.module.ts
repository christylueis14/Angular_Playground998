import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { C5Component } from './c5/c5.component';
import { C6Component } from './c6/c6.component';
import { UiModule } from '../ui/ui.module';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5Component,
    C6Component
  ],
  imports: [
    MatCheckboxModule,
    CommonModule,
    Module2RoutingModule,
    UiModule,MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ],
  exports:[],
  providers: [
  ]
})
export class Module2Module { }
