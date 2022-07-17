import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatSliderModule,MatTabsModule,MatFormFieldModule
  ],
  exports:[MatSliderModule,MatTabsModule,MatFormFieldModule]
})
export class UiModule { }
