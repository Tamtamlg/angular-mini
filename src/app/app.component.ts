import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {

  users = []

  constructor(private usersServise: UsersService) { }

  ngOnInit() {
    // this.users = this.usersServise.users

    this.usersServise.getUsers().subscribe(users => {
      // console.log(users);
      this.users = users;
    });

  }

}
