import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-xss',
  styleUrls: ['./xss.component.css'],
  template: 
`
<div [innerHTML]="sanitizeInput"></div>
`
})
export class XssComponent {
  userInput: string = '<script>alert("XSS Attack!")</script>';
  sanitizeInput: SafeHtml;

  constructor(private sanitizer: DomSanitizer){}

  ngOnInit() {
    this.sanitizeInput = this.sanitizer.bypassSecurityTrustHtml(this.userInput);
  }
}
