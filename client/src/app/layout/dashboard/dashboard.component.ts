import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SchoolService } from '../../school.service';
import { BaseChartDirective } from 'ng2-charts';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  // Bar Chart
  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  schoolName: String;
  unauthorise: Boolean = false ;

  public barChartType: string;
  public barChartLegend: boolean;

  public barChartLabels: string[] = [];
  public barChartData: { data: number[]; label: String }[] = [
    { data: null, label: 'Total Schools' }
  ];

  public barChartLabels1: string[] = [
    'Std-1',
    'Std-2',
    'Std-3',
    'Std-4',
    'Std-5',
    'Std-6',
    'Std-7',
    'Std-8',
    'Std-9',
    'Std-10'
  ];
  public barChartData1: { data: number[]; label: String }[] = [
    { data: null, label: 'School1' }
  ];
  public schoolList: any = [];
  public studentCount = 0;

  constructor(private schoolService: SchoolService,
    private userService: UserService
    ) {
    this.getSchoolList();
    this.getSchool();
  }

  ngOnInit() {
    this.barChartType = 'bar';
    this.barChartLegend = false;
  }

  getSchoolList() {
    this.schoolService.getCollection().subscribe((res: any) => {
      if (res) {
        this.schoolList = res;
        this.studentCount = this.getStudentCount(res);
        this.barChartLabels = this.getSchoolNameList();
        this.barChartData[0].data = this.getNumberOfStudentsInSchool();
        setTimeout(() =>  this.updateChart());
      }
    });
  }

  getStudentCount(res) {
    let count = 0;
    res.forEach(school => {
      count = count + school.students.length;
    });
    return count;
  }

 updateChart() {
    this.chart.chart.update(); // This re-renders the canvas element.
  }

  getSchoolNameList() {
    const schoolArr = [];
    this.schoolList.forEach(school => {
      schoolArr.push(school.schoolName);
    });
    return schoolArr;
  }

  getNumberOfStudentsInSchool() {
    const studentArr = [];
    this.schoolList.forEach(school => {
      studentArr.push(school.students.length);
    });
    return studentArr;
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
    this.barChartData1[0].data = null;
    if(e.active[0]._model.label === this.schoolName){
      const school = this.schoolList.filter(
        s => s.schoolName === e.active[0]._model.label
      )[0];
      const data = [
        this.getStudentCountByStd(1, school),
        this.getStudentCountByStd(2, school),
        this.getStudentCountByStd(3, school),
        this.getStudentCountByStd(4, school),
        this.getStudentCountByStd(5, school),
        this.getStudentCountByStd(6, school),
        this.getStudentCountByStd(7, school),
        this.getStudentCountByStd(8, school),
        this.getStudentCountByStd(9, school),
        this.getStudentCountByStd(10, school)
      ];
      this.barChartData1[0].data = data;
    }else{
      this.unauthorise = true;
    }
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  getStudentCountByStd(std, school) {
    return school.students.filter(s => parseInt(s.std, 10) === std).length;
  }

  getSchool() {
    this.userService.getUserInfo().subscribe((res: any) => {
      if (res && res.schoolName) {
        this.schoolName = res.schoolName;
        localStorage.setItem('principalName', res.principalName)
      }
    });
  }
}
