import { Component } from '@angular/core';

@Component({
  selector: 'app-sync',
  styleUrls: ['./sync.component.css'],
  template:
`
<button (click)="executeSync()">Execute sync</button>
<p>{{ syncResult }}</p>
`,
})
export class SyncComponent {
  syncResult: string = '';

  executeSync() {
    this.syncResult = 'Sync process started...';
    this.longRunningProcess();
    this.syncResult = 'Sync process completed!';
  }

  longRunningProcess() {
    for(let i = 0 ; i < 1000000000; i++) {
      // heavy computation!
    }
  }

}
