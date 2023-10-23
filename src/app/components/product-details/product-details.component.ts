import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  CPId:number = 0;
  product:IProduct|undefined=undefined;
  constructor(public prdService:ProductsService,public activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.CPId= (this.activatedRoute.snapshot.paramMap.get('prodID'))?Number(this.activatedRoute.snapshot.paramMap.get('prodID')):0;
    this.product=this.prdService.getProductByID(this.CPId);
  }

}
