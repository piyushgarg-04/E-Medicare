import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  billingForm = new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    address1:new FormControl('',[Validators.required]),
    address2:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    zip:new FormControl('',[Validators.required])
  })
  
  get firstname(){
    return this.billingForm.get('firstname');
  }
  get address1(){
    return this.billingForm.get('address1');
  }
  get address2(){
    return this.billingForm.get('address2');
  }
  get city(){
    return this.billingForm.get('city');
  }
  get state(){
    return this.billingForm.get('state');
  }
  get zip(){
    return this.billingForm.get('zip');
  }


  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router) { }
  checkout(){
    
  }

  ngOnInit(): void {
    
  }

  

}