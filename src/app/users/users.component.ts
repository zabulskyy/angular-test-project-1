import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => {
        this.isLoading = false;
        this.users = data
      });
  }
  users;
  isLoading = true;
}
