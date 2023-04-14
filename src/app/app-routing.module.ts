import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/dashboard/home/home.component';

const routes: Routes = [
  {path:'dashboard', children:[
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
