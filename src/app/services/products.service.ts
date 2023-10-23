import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProduct[] ;

  constructor() {



    this.products = [
      {productId:1, productName: "Black Camera", productQuantity:15, productPrice:200, productImage: "assets/pexels-math-90946.jpg",categoryId:1},
      {productId:2, productName: "Black Camera", productQuantity:10, productPrice:200, productImage: "assets/pexels-math-90946.jpg",categoryId:1},
      {productId:3, productName: "Black Camera", productQuantity:5, productPrice:200, productImage: "assets/pexels-math-90946.jpg",categoryId:2},
      {productId:3, productName: "Black Camera", productQuantity:5, productPrice:200, productImage: "assets/pexels-math-90946.jpg",categoryId:2},
      {productId:3, productName: "Black Camera", productQuantity:5, productPrice:200, productImage: "assets/pexels-math-90946.jpg",categoryId:2},
      {productId:4, productName: "Black Camera", productQuantity:0, productPrice:200, productImage: "assets/pexels-math-90946.jpg",categoryId:3},
      {productId:5, productName: "Black Camera", productQuantity:0, productPrice:200, productImage: "assets/pexels-math-90946.jpg",categoryId:3},

    ];
   }

   getAllProducts(): IProduct[] {
    return this.products;
  }


  getProductsByCatID(catID: number): IProduct[] {
    if (catID == 0) {
      return this.getAllProducts();
    }
    else{
      return this.products.filter(prd=>prd.categoryId==catID);
    }
  }

  getProductByID(prdID:number):IProduct|undefined {

    return this.products.find(prd=>prd.productId==prdID);

  }
}
