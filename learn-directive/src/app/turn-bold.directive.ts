import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTurnBold]'
})
export class TurnBoldDirective implements OnInit  {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
  }
}
