import { Component } from '@angular/core';

@Component({
  selector: 'app-async',
  styleUrls: ['./async.component.css'],
  template: 
`
<button (click)="executeAsync()">Execute async</button>
<p>{{ asyncResult }}</p>
`,
})
export class AsyncComponent {
  asyncResult: string = '';

  async executeAsync() {
    this.asyncResult = 'Async process started...';
    await this.longRunningProcess();
    this.asyncResult = 'Async process completed!';
  }

  longRunningProcess() {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  }

}
