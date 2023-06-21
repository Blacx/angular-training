import { Component, OnInit } from '@angular/core';
import { UserService, User } from './users.service';

@Component({
  selector: 'app-users',
  styleUrls: ['./users.component.css'],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers()
      .then((users: User[]) => {
        this.users = users;
      });
  }
}
