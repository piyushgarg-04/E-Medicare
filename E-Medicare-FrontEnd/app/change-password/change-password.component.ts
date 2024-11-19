import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  
  
  loginRef = new FormGroup({
    emailid:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,Validators.required),
    typeOfUser:new FormControl()
  });
  msg:string=""
  
 
  constructor(public ls:LoginService,public router:Router) { }
 
  ngOnInit(): void {
  }
  changePassword() {
    let login = this.loginRef.value;
    this.ls.changePassword(login).subscribe({
      next:(result:any)=>this.msg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
    
  }
 
}