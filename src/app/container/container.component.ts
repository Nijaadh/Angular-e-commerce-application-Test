import { Component, ViewChild, viewChild } from '@angular/core';
import { ProductlistComponent } from './productlist/productlist.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

  searchText:string='';

  @ViewChild(ProductlistComponent) ProductListComponent: ProductlistComponent;

  onserchTextChange(searchText:string){
    this.searchText=searchText;
  }
}
