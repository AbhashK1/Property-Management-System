import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/dashboard/home/home.component';
import { BuyComponent } from './component/dashboard/buy/buy.component';
import { SellComponent } from './component/dashboard/sell/sell.component';
import { MaintainanceComponent } from './component/dashboard/maintainance/maintainance.component';
import { SupportComponent } from './component/dashboard/support/support.component';
import { ViewpropertyComponent } from './component/dashboard/buy/viewproperty/viewproperty.component';

const routes: Routes = [
  {path:'dashboard', children:[
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'buy', component: BuyComponent},
    {path : 'buy/:id', component: ViewpropertyComponent},
    {path : 'buy/viewproperty', component: ViewpropertyComponent},
    {path: 'sell', component: SellComponent},
    {path: 'maintainance', component: MaintainanceComponent},
    {path: 'support', component: SupportComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
