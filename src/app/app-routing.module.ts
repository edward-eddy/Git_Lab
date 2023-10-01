import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdwardComponent } from './edward/edward.component';

const routes: Routes = [
  {path:"/edward", component:EdwardComponent, title:"Edward"},
  {path:"/samuel", component:EdwardComponent, title:"Sam"},
  {path:"/sara", component:EdwardComponent, title:"Sara"},
  {path:"/randa", component:EdwardComponent, title:"Randa"},
  {path:"/aya", component:EdwardComponent, title:"Aya"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
