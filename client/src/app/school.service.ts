import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class SchoolService {
  uri = "http://localhost:5000/api";
  constructor(private http: HttpClient) {}

  public headers = { Authorization: localStorage.getItem("token") };
  getSchoolName() {
    return this.http.get(`${this.uri}/school`, { headers: this.headers });
    
  }
}
