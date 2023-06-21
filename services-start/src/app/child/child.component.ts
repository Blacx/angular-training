import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message: string;
  @Output() childEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
      console.log('Message from parent: ' + this.message);
  }

  sendMessage() {
    this.childEvent.emit('Hello parent!');
  }

}
