import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

   user: User;

    constructor(private userService: UserService,private router: Router){
      this.user=new User();
    }

    ngOnInit(){

    }

    saveData(form:NgForm){
      if(form.valid){
        this.userService.AddUser(this.user).subscribe(res =>{
          if(res.status===201){
            this.router.navigate(['/']);
          }
        })
        
      }
    }

}
