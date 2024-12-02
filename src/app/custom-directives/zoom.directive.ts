import { Directive, ElementRef, Renderer2,OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[zoomProdut]'
})
export class ZoomDirective{

  constructor(private element:ElementRef,private renderer:Renderer2) { }


  @HostListener('mouseenter')OnMouseEnter(){
    this.renderer.addClass(this.element.nativeElement,'zoom-product');
  }

  @HostListener('mouseout')OnMouseOut(){
    this.renderer.removeClass(this.element.nativeElement,'zoom-product');
  }

}
