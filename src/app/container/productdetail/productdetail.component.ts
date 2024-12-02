import { Component, Input, OnInit, ViewChild, viewChild } from '@angular/core';
import { Product } from '../../Models/product';
import { ProductlistComponent } from '../productlist/productlist.component';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.scss'
})
export class ProductdetailComponent {

  prod: Product;

  @Input()
  productListComp:ProductlistComponent;

  ngOnInit(): void {
    this.prod = this.productListComp.selectedProduct;
    console.log(this.prod);
  }

  getDiscoutPercentage(prod:any){
    return (prod.discountPrice/prod.price)*100;
  }
}
