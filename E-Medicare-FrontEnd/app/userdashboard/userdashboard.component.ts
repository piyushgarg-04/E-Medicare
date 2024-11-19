import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  flagos:boolean = false;
  searchText:string=''; 
  user:string ="";
  public productList : any ;
  public filterCategory : any;
  searchKey:string ="";
  public totalItem : number = 0;
  public searchTerm !: string;
  onSearchTextEntered(searchValue:string){
    this.searchText=searchValue;
   
  }

 
  
  constructor(public router:Router,private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {

    
    let obj = sessionStorage.getItem("userDetails");
    if(obj!=null){
      this.user=obj;
    }
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(type:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.type == type || type==''){
        return a;
      }
    })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  logout() {
    sessionStorage.removeItem("userDetails");
    this.router.navigate(["login"]);
  }



  
}
