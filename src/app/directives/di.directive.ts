import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDi]',
})
export class DiDirective {

//  @Input() property1: string = 'blue';
//  @Input('ImgStyle') property2: string = 'red';


  constructor(public elementRef: ElementRef) {

  }

//  method decorator
@HostListener('mouseover') func1() {
  this.elementRef.nativeElement.style.boxShadow = "4px 0px 5px #888888";
  this.elementRef.nativeElement.style.borderRadius = '20px';

}
@HostListener('mouseout') func2() {
  this.elementRef.nativeElement.style.boxShadow = "0px 0px 0px";
  this.elementRef.nativeElement.style.borderRadius = '0px';

}
}



