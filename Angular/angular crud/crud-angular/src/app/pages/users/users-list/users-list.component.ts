import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  //users: User[] = [];
  users: Array<User> = [];

  constructor(private usersServices: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersServices.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  deleteUser(nome: string){
    this.usersServices.deleteUser(nome).subscribe(response => {

    }, (err) => {
      console.log('erro', err);

    }, () => {
      this.getUsers();
    })
  }

}
