import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { UserService } from '../user.service';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    constructor(public userService: UserService) {}
     schoolName: String ;
     principalName: String;
     email: String;
     password: String;
     password2: String;

  signup() {
    const userData = {
      schoolName: this.schoolName,
      principalName: this.principalName,
      email: this.email,
      password: this.password,
      password2: this.password2
    };
this.userService.postData(userData) 
}


  ngOnInit() {}
}
