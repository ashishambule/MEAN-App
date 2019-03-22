import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SchoolService } from '../../../school.service';
import { UserService } from '../../../user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public pushRightClass: string;

  public principalName: String;
  constructor(
    public router: Router,
    private userService: UserService
  ) {
    this.principalName = '';
    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
    this.getSchool("1");

  }

  ngOnInit() {
    this.pushRightClass = 'push-right';
    this.getSchool("2");
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }
  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  getSchool(a) {
    console.log(a);
    
    this.userService.getUserInfo().subscribe((res: any) => {
      if (res && res.principalName) {
        this.principalName = res.principalName;
      }
    });
  }
}
