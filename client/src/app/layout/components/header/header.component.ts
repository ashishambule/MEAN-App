import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SchoolService } from '../../../school.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public pushRightClass: string;
  public schoolName: String;
  constructor(
    private translate: TranslateService,
    public router: Router,
    private schoolService: SchoolService
  ) {
    this.schoolName = 'User';
    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.pushRightClass = 'push-right';
    this.getSchoolName();
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
  getSchoolName() {
    this.schoolService.getSchoolName().subscribe((res: any) => {
      if (res && res.schoolName) {
        this.schoolName = res.schoolName;
      }
    });
  }
}
