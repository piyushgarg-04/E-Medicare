
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm = new FormGroup({
    cardname:new FormControl('',[Validators.required]),
    cardnumber:new FormControl('',[Validators.required]),
    expmonth:new FormControl('',[Validators.required]),
    expyear:new FormControl('',[Validators.required]),
    cvv:new FormControl('', [Validators.required])})
     get cardname(){
      return this.checkoutForm.get("cardname");
     }
     get cardnumber(){
      return this.checkoutForm.get("cardnumber");
     }
     get expmonth(){
      return this.checkoutForm.get("expmonth");
     }
     get expyear(){
      return this.checkoutForm.get("expyear");
     }
     get cvv(){
      return this.checkoutForm.get("cvv");
     }


  
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  checkOut(){
      alert("Payment done Successfully");
      
     
   
  }

}