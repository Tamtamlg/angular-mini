import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users = [];
  searchStr = '';

  constructor(private usersServise: UsersService) { }

  ngOnInit() {
    // this.users = this.usersServise.users

    this.usersServise.getUsers().subscribe(users => {
      // console.log(users);
      this.users = users;
    });

  }

}
