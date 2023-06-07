import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './component/dashboard/buy/buy.component';
import { SellComponent } from './component/dashboard/sell/sell.component';
import { SupportComponent } from './component/dashboard/support/support.component';
import { ViewpropertyComponent } from './component/dashboard/sell/viewproperty/viewproperty.component';
import { EnquiryComponent } from './component/dashboard/enquiry/enquiry.component';
import { LoginComponent } from './component/auth/login/login.component';
import { AuthGuardGuard } from './shared/guard/auth-guard.guard';
import { RegistrationComponent } from './component/auth/registration/registration.component';

const routes: Routes = [
  {path:'dashboard', children:[
    {path: '', redirectTo: 'buy', pathMatch:'full'},
    {path: 'buy', component: BuyComponent},
    {path: 'sell', component: SellComponent},
    {path: 'sell/:id', component: ViewpropertyComponent},
    {path: 'support', component: SupportComponent},
    {path: 'enquiry', component: EnquiryComponent},
  ], canActivate:[AuthGuardGuard]},
  {path: '', redirectTo: 'login', pathMatch:'full'}, //dashboard/buy
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
