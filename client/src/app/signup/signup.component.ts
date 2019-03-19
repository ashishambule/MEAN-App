import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor() {}
      // schoolName: String;
      // principalName: String;
      // email: String;
      // password: String;
      // password2: String;

    // register() {
    //   const userData = {
    //     schoolName: this.schoolName,
    //     principalName: this.principalName,
    //     email: this.email,
    //     password: this.password,
    //     password2: this.password2
    //   };
    //   this.userService.registerUser(userData).subscribe(res => {
    //     console.log('register works');

    //   });
    // }
    ngOnInit() {}
}
