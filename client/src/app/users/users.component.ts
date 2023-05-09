import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: User[];

  constructor(private userService: UserService){};

  ngOnInit(){
    this.userService.GetUsers().subscribe(res=>{
      this.users=res;
    });
  }

}
