import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminProductRetrieveComponent } from './admin-product-retrieve/admin-product-retrieve.component';
import { SearchComponent } from './search/search.component';
import { BillingComponent } from './billing/billing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChecktqComponent } from './checktq/checktq.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from './shared/filter.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    AddProductComponent,
    AdminProductRetrieveComponent,
    SearchComponent,
    BillingComponent,
    CheckoutComponent,
    ChecktqComponent,
    ChangePasswordComponent,
    ViewuserComponent,
    CartComponent,
    FilterPipe,
    HomepageComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }