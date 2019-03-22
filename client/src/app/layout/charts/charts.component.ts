import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SchoolService } from '../../school.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
  constructor(private schoolService: SchoolService) {
    this.getSchoolList();
  }
  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: any = [];
  public doughnutChartType: string;

  // Radar
  public radarChartLabels: string[] = [];
  public radarChartData: any = [
    { data: [], label: 'Students' }
  ];
  public radarChartType: string;

  // Pie
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: string;

  // PolarArea
  public polarAreaChartLabels: string[] = [];
  public polarAreaChartData: number[] = [];
  public polarAreaLegend: boolean;

  public polarAreaChartType: string;

  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean;
  public lineChartType: string;
  public schoolList: any = [];

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
    ];

    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  ngOnInit() {
    this.doughnutChartType = 'doughnut';
    this.radarChartType = 'radar';
    this.pieChartType = 'pie';
    this.polarAreaLegend = true;
    this.polarAreaChartType = 'polarArea';

  }

  getSchoolList() {
    this.schoolService.getCollection().subscribe((res: any) => {
      if (res) {
        this.schoolList = res;

        setTimeout(() => this.doughnutChartLabels = this.getSchoolNameList());
        this.doughnutChartData = this.getNumberOfStudentsInSchool();
        this.radarChartLabels = this.getSchoolNameList();
        this.radarChartData[0].data = this.getNumberOfStudentsInSchool();
        setTimeout(() => this.pieChartLabels = this.getSchoolNameList());
        this.pieChartData = this.getNumberOfStudentsInSchool();
       setTimeout(() => this.polarAreaChartLabels = this.getSchoolNameList());
        this.polarAreaChartData = this.getNumberOfStudentsInSchool();
      }
    });
  }
  getNumberOfStudentsInSchool() {
    const studentArr = [];
    this.schoolList.forEach(school => {
      studentArr.push(school.students.length);
    });
    return studentArr;
  }
  getSchoolNameList() {
    const schoolArr = [];
    this.schoolList.forEach(school => {
      schoolArr.push(school.schoolName);
    });
    return schoolArr;
  }
}
