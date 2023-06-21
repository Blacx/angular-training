import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTurnHighlight]'
})
export class TurnHighlightDirective {
  @Input() defaultColor: string = 'transparent';
  @Input() hightLightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() {
      //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.defaultColor);
      this.backgroundColor = this.defaultColor;
    }

  @HostListener('mouseenter')
  onMouseEnter(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.hightLightColor);
    this.backgroundColor = this.hightLightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.defaultColor);
    this.backgroundColor = this.defaultColor;
  }

}
