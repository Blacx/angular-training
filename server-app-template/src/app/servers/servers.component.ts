import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowAddServer: boolean = false;
  serverName: string = 'Default name';
  serverNameManual: string = 'Default name';
  serverCreationStatus: string = '';

  constructor(){
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  onAddServer() {
    this.serverCreationStatus = 'Server was created! Server name ' + this.serverName;
  }

  onInputChange(eventData: Event){
    //console.log(eventData);
    this.serverNameManual = (<HTMLInputElement>eventData.target).value;
  }

}
