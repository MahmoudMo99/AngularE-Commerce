import { Component, Input } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

//Day 1
  // productName: string = "Black Camera";
  // productId: number = 1;
  // productQuantity: number =15;

  // displayPrice(){
  //   return `10$`
  // }

  //Day 2

  clientName: string;
  flagImage:boolean=true;
  flagText:boolean=false;
  localDate:Date = new Date();



//Day 4
//   @Input() selectedCatFromparentValue:number=0;
// productsAfterFilter:IProduct[]=[];


  productList: IProduct[] ;
// Day3
  catList:ICategory[] ;
  selectCat:number = 0;
  constructor(public Productsservice:ProductsService){
    this.productList = [
      {productId:1, productName: "Black Camera", productQuantity:15, productPrice:200, productImage: "assets/pexels-math-90946.jpg",categoryId:1},
      {productId:2, productName: "Black Camera", productQuantity:10, productPrice:200, productImage: "assets/pexels-math-90946.jpg",categoryId:1},
      {productId:3, productName: "Black Camera", productQuantity:5, productPrice:200, productImage: "assets/pexels-math-90946.jpg",categoryId:2},
      {productId:3, productName: "Black Camera", productQuantity:5, productPrice:200, productImage: "assets/pexels-math-90946.jpg",categoryId:2},
      {productId:3, productName: "Black Camera", productQuantity:5, productPrice:200, productImage: "assets/pexels-math-90946.jpg",categoryId:2},
      {productId:4, productName: "Black Camera", productQuantity:0, productPrice:200, productImage: "assets/pexels-math-90946.jpg",categoryId:3},
      {productId:5, productName: "Black Camera", productQuantity:0, productPrice:200, productImage: "assets/pexels-math-90946.jpg",categoryId:3},

    ];



    this.catList=[
      {categoryId:1,categoryName:"Mobile"},
      {categoryId:2,categoryName:"LabTop"},
      {categoryId:3,categoryName:"TV"},

    ];


    this.clientName = "Mahmoud Mo";

  }


  // ngOnChanges(): void {

  // //  this.productsAfterFilter= this.getProductsByCat(this.selectedCatFromparentValue);
  // this.productsAfterFilter=this.Productsservice.getProductsByCatID(this.selectedCatFromparentValue);
  //   }






//   s:Store=new Store("Products Store ","favicon.ico",["ZARA","She"]);
// toggleImage(){

//   this.flagImage=!this.flagImage;
// }

toggletext(){
  this.flagText=!this.flagText;
}

// getProductsByCat(catID:number):IProduct[]{

// if(catID==0){
//   return this.productList;
// }
// else{
// return this.productList.filter(prd=>prd.categoryId==catID);
// }


// }



}








