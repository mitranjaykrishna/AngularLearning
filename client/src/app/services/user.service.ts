import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment as env } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers:HttpHeaders;

  constructor(private client:HttpClient) {
    this.headers=new HttpHeaders({'content-type':'application/json'})
   }

  GetUsers():Observable<User[]>{
    return this.client.get<User[]>(env.apiAddress+'/user');
  }
  GetUser(id:string):Observable<User>{
    return this.client.get<User>(env.apiAddress+id);
  }

  AddUser(user:User): Observable<HttpResponse<any>>{
    return this.client.post(env.apiAddress+'/user/',JSON.stringify(user),{
      headers: this.headers,observe:'response'});
  }
}
