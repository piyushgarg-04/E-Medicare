import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
import { ProductService } from '../product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productRef = new FormGroup({
    pname:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    url:new FormControl('',[Validators.required]),
    type:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required])
  })
  get pname(){
    return this.productRef.get('pname');
  }
  get price(){
    return this.productRef.get('price');
  }
  get url(){
    return this.productRef.get('url');
  }
  get type(){
    return this.productRef.get('type');
  }
  get description(){
    return this.productRef.get('description');
  }
  storeMsg :string =""
  constructor(public ps:ProductService) { }

  ngOnInit(): void {
  }

  storeProduct() {
    let product = this.productRef.value;
    this.ps.storeProduct(product).subscribe({
      next:(result:any)=>this.storeMsg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })

    this.productRef.reset();
  }

}
