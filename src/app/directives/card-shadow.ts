import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardShadow]',
})
export class CardShadow {
  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.boxShadow =
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.boxShadow = 'none';
  }
}
