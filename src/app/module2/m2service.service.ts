import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from './Model/userModel';

@Injectable({
  providedIn: 'root'
})
export class M2serviceService {
  users: Users[] = [];
  constructor(private http: HttpClient) { }


  getuserdata() {
    let urls = environment.domain + "/users";
    let response = this.http.get(urls);
    return response;
  }

  get getdata() {
    return this.users;
  }
  setdata(data: Users[]) {
    this.users = data;
  }
}
