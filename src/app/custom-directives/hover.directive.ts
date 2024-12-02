import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[buttonHover]'
})
export class HoverDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) {

  }

 @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';
 @HostBinding('style.border') border:string = '1px solid black';
 @HostBinding('style.color') text:string = 'black';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'orange';
    this.border = 'none';
    this.text = 'white';

    // this.element.nativeElement.style.backgroundColor ='orange';
    // this.element.nativeElement.style.border ='none';
    // this.element.nativeElement.style.color ='white';

    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'orange');
    // this.renderer.setStyle(this.element.nativeElement, 'border', 'none');
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'white');

    

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'transparent';
    this.border = '1px solid black';
    this.text = 'black';

    // this.element.nativeElement.style.backgroundColor ='transparent';
    // this.element.nativeElement.style.border ='1px solid black';
    // this.element.nativeElement.style.color ='black';

    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'transparent');
    // this.renderer.setStyle(this.element.nativeElement, 'border', '1px solid black');
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'black');


  }
}
