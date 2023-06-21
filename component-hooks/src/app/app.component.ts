import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy {
  
  title = 'component-hooks';
  hooks: string[] = [];

  constructor() {
    this.addStatus('constructor');
  }

  addStatus(status: string) {
    this.hooks.push(status);
    console.log(status);
  }

  ngOnDestroy(): void {
    this.addStatus('ngOnDestroy');
  }
  ngAfterViewChecked(): void {
    this.addStatus('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    this.addStatus('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    this.addStatus('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    this.addStatus('ngAfterContentInit');
  }
  ngDoCheck(): void {
    this.addStatus('ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.addStatus('ngOnChanges');
  }

  ngOnInit(): void {
    this.addStatus('ngOnInit');
  }



}
