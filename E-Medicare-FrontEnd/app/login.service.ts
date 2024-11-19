import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL:string ="http://localhost:8080/login";
  constructor(public http:HttpClient) { }
 
  signIn(login:any):Observable<string> {
    return this.http.post(this.baseURL+"/signIn",login,{responseType:"text"});
  }
 
  
  signUp(login:any):Observable<string> {
    return this.http.post(this.baseURL+"/signUp",login,{responseType:"text"});
  }
 
  changePassword(login:any):Observable<string> {
    return this.http.post(this.baseURL+"/changePassword",login,{responseType:"text"});
  }
 
  findAllUsers():Observable<Login[]> {
    return this.http.get<Login[]>(this.baseURL+"/findAllUser");
  }
 
  deleteUserByemailid(emailid:any):Observable<String>{
    return this.http.delete(this.baseURL+"/deleteUser/"+emailid,{responseType:"text"});
  }
}