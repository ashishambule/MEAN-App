import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {}

  postData(user) {
    this.http
      .post(`${this.uri}/register`, user)
      .subscribe(res => console.log('Register Done'));
  }

  loginUser(user) {
    return this.http
      .post(`${this.uri}/login`, user)
      .subscribe(res => console.log('Login Done'));
  }
}
