import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminProductRetrieveComponent } from './admin-product-retrieve/admin-product-retrieve.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { BillingComponent } from './billing/billing.component';
import { CartComponent } from './cart/cart.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChecktqComponent } from './checktq/checktq.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"cart",component:CartComponent},
  {path:"changePassword",component:ChangePasswordComponent},
  
  {path:"login",component:LoginComponent},
  {path:"adminHome",component:AdmindashboardComponent,children:[
    {path:"viewuser",component:ViewuserComponent},
    {path:"addProduct",component:AddProductComponent},
    {path:"findAllProduct",component:AdminProductRetrieveComponent}
    
  ]},
  
  {path:"userHome",component:UserdashboardComponent},
  {path:"billing",component:BillingComponent },
  {path:"checkout",component:CheckoutComponent},
  {path:"checktq",component:ChecktqComponent},
  
  {path:"signUp",component:SignupComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomepageComponent,pathMatch:"full"},
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }