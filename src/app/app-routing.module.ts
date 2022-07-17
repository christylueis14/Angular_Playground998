import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Module2Module } from './module2/module2.module';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path:'',
  loadChildren:()=>import('./module2/module2.module').then(m=>m.Module2Module)
},
{
  path:'m2',
  loadChildren:()=>import('./module2/module2.module').then(m=>m.Module2Module)
},
{
  path:'m3',
  loadChildren:()=>import('./module3/module3.module').then(m=>m.Module3Module)
},
{
  path:'m4',
  loadChildren:()=>import('./module4/module4.module').then(m=>m.Module4Module)
},
{path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
