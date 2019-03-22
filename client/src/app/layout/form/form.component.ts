import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SchoolService } from '../../school.service';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [routerTransition()]
})
export class FormComponent implements OnInit {
  constructor(
    private schoolService: SchoolService,
    private userService: UserService
  ) {
    this.schoolName = '';

    this.students = [{ name: '', age: '', location: '', std: '' }];
  }
  schoolName: String;

  students: { name: String; age: String; std: any; location: String }[];

  addSchool() {
    this.schoolService.getSchoolInfo().subscribe((res: any) => {
      if (res && res.schoolName) {
        // this.schoolName = res.schoolName;
        this.students = res.students;
      }
    });
  }

  postStudentData() {
    const studentInfo = {
      schoolName: this.schoolName,
      students: this.students
    };
    this.schoolService.postStudent(studentInfo).subscribe((res: any) => {});
  }
  ngOnInit() {
    this.addSchool();
    this.getSchool()
  }
  addStudent() {
    this.students.unshift({ name: '', age: '', location: '', std: '' });
  }
  getSchool() {
    this.userService.getUserInfo().subscribe((res: any) => {
      if (res && res.schoolName) {
        this.schoolName = res.schoolName;
      }
    });
  }
}
