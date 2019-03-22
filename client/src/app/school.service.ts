import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  uri = 'http://localhost:3001/api';
  constructor(private http: HttpClient) {}

  public headers = { Authorization: localStorage.getItem('token') };
  getSchoolInfo() {
    return this.http.get(`${this.uri}/school`, { headers: this.headers });
    }

    postStudent(sData) {
      return this.http.post(`${this.uri}/school`, sData, { headers: this.headers });
    }

    getCollection() {
      return this.http.get(`${this.uri}/school/all`, { headers: this.headers });
      }
}

