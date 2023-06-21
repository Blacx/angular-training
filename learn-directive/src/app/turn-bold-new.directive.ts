import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTurnBoldNew]'
})
export class TurnBoldNewDirective {
  
  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter(eventData: Event) {
    this.setFontWeight('bold');
  }

  @HostListener('mouseleave')
  onMouseLeave(eventData: Event) {
    this.setFontWeight('normal');
  }

  setFontWeight(fontWeight: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', fontWeight);
  }

}
