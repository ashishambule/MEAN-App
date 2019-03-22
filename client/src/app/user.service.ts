import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  uri = 'http://localhost:3001/api/users';


  
  public headers = { Authorization: localStorage.getItem('token') || '' };

  postData(user) {
    return this.http.post(`${this.uri}/register`, user);
    // .subscribe(res => console.log(res));
  }

  loginUser(user) {
    return this.http.post(`${this.uri}/login`, user);
    // .subscribe(res => console.log('Login Done'));
  }
  getUserInfo() {
    return this.http.get(`${this.uri}/current`, { headers: this.headers });
  }
}
