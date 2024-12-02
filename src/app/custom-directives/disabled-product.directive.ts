import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[DisabledProduct]'
})
export class DisabledProductDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @Input() set DisabledProduct(disbaledProduct:boolean) {
    if(disbaledProduct){
      //this.renderer.removeClass(this.element.nativeElement, 'product-card');
      this.renderer.addClass(this.element.nativeElement, 'D-product-card');
      this.renderer.addClass(this.element.nativeElement, 'disabled-out-of-stock-product');
           
    }
    else{
      this.renderer.addClass(this.element.nativeElement, 'product-card');
      //this.renderer.removeClass(this.element.nativeElement, 'disabled-out-of-stock-product');
    }
  }

}
