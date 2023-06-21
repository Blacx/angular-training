import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private title: Title){}
  
  ngOnInit(): void {
    this.title.setTitle('users');
  }
}
