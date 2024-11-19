import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { LoginService } from '../login.service';
import { Validators
 } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginRef = new FormGroup({
    emailid:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,Validators.required),
    typeOfUser:new FormControl("user")
  });
  msg:string=""

  constructor(public ls:LoginService) { }

  ngOnInit(): void {
  }

  signUp() {
    let login = this.loginRef.value;
    this.ls.signUp(login).subscribe({
      next:(result:any)=>this.msg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }
}
