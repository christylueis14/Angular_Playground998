import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { C5Component } from './c5/c5.component';
import { C6Component } from './c6/c6.component';

const routes: Routes = [
 
  {
    path:'',
    component:C1Component
  },

 {
  path:'m2',
  children:[
    {
      path:'',
      component:C2Component, 
    },
   ]
  },
  {
    path:'c3',
    component:C3Component
  },
  {
    path:'c3',
    component:C3Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
