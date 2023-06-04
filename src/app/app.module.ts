import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment.prod';
import { MaterialModule } from './material/material/material.module';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BuyComponent } from './component/dashboard/buy/buy.component';
import { SellComponent } from './component/dashboard/sell/sell.component';
import { SupportComponent } from './component/dashboard/support/support.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { AddpropertyComponent } from './component/dashboard/sell/addproperty/addproperty.component';
import { FormsModule, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { DeletepropertyComponent } from './component/dashboard/sell/deleteproperty/deleteproperty.component';
import { ViewpropertyComponent } from './component/dashboard/sell/viewproperty/viewproperty.component';
import { EnquiryComponent } from './component/dashboard/enquiry/enquiry.component';
import { LoginComponent } from './component/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BuyComponent,
    SellComponent,
    SupportComponent,
    AddpropertyComponent,
    ViewpropertyComponent,
    DeletepropertyComponent,
    EnquiryComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
