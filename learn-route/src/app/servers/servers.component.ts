import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(
    private routes: Router,
    private route: ActivatedRoute, 
    private title: Title){}

    ngOnInit(): void {
      this.title.setTitle('Servers');
    }
  
  onLoadServer() {
    this.routes.navigate(['/servers'], {relativeTo: this.route});
  }
}
