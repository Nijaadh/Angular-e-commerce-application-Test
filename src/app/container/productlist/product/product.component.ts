import { Component,Input } from '@angular/core';
import { Product } from '../../../Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input()
  product:Product;

  getDiscoutPercentage(prod:any){
    return (prod.discountPrice/prod.price)*100;
  }
}
