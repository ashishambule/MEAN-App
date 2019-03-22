import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SchoolService } from '../../school.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public barChartLabels: string[] = [];
  public barChartType: string;
  public barChartLegend: boolean;

  public barChartData: {data: number[], label: String}[] = [
    { data: [], label: 'School',
  }
  ];

  public barChartLabels1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public barChartData1: {data: number[], label: String}[] = [
    { data: [1], label: 'School1',
  }
  ];


// Doughnut
public doughnutChartLabels: string[] = [];
public doughnutChartData: number[] = [0, 0, 0];
  public doughnutChartType: string;

  public schoolList: any = [];
  public studentCount = 0;
  constructor(private schoolService: SchoolService) {
    this.getSchoolList();
  }

  ngOnInit() {
    this.barChartType = 'bar';
    this.barChartLegend = false;
    this.doughnutChartType = 'doughnut';
  }

  getSchoolList() {
    this.schoolService.getCollection().subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.schoolList = res;
        this.studentCount = this.getStudentCount(res);
        this.barChartLabels = this.getSchoolNameList();
        this.barChartData[0].data = this.getNumberOfStudentsInSchool();
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

      const school = this.schoolList.filter(s => s.schoolName === (e.active[0]._model.label))[0];
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
        this.getStudentCountByStd(10, school),
       ];
       this.barChartData1[0].data = data;
  }

  public chartHovered(e: any): void {
       console.log(e);
  }


  getStudentCountByStd(std, school) {
   return  school.students.filter(s => parseInt(s.std, 10) === std).length;
  }
}
