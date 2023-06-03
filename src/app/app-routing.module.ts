import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './component/dashboard/buy/buy.component';
import { SellComponent } from './component/dashboard/sell/sell.component';
import { SupportComponent } from './component/dashboard/support/support.component';
import { ViewpropertyComponent } from './component/dashboard/sell/viewproperty/viewproperty.component';
import { EnquiryComponent } from './component/dashboard/enquiry/enquiry.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard/buy', pathMatch:'full'},
  {path:'dashboard', children:[
    {path: '', redirectTo: 'buy', pathMatch:'full'},
    {path: 'buy', component: BuyComponent},
    {path: 'sell', component: SellComponent},
    {path: 'sell/:id', component: ViewpropertyComponent},
    {path: 'support', component: SupportComponent},
    {path: 'enquiry', component: EnquiryComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
