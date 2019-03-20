import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  constructor(public router: Router, public userService: UserService) {}

  email: String;
  password: String;

  login() {
    const loginData = {
      email: this.email,
      password: this.password
    };
    this.userService.loginUser(loginData).subscribe((res: any) => {
      // console.log(res);
      if (res && res.success === true) {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard'])
      }
    });
  }
  ngOnInit() {}
  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
  }
}
