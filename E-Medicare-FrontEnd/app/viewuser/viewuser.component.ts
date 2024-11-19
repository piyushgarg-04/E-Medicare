import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  Login:Array<Login>=[];
  constructor(public ls:LoginService) { }

  ngOnInit(): void {
    this.findAllUsers();
  }
  flag:boolean = false;
  emailid:string ="";
  password:string ="";
  typeOfUser:String="";

  findAllUsers() {
    this.ls.findAllUsers().subscribe({
      next:(result:any)=>this.Login=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }

  deleteUser(emailid:string){
    
    this.ls.deleteUserByemailid(emailid).subscribe({
      next:(result:any)=>console.log(result),
      error:(error:any)=>console.log(error),
      complete:()=>{
          this.findAllUsers();   
      }
    })
  }

}
