import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbCarouselModule, NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule as Ng2Charts } from "ng2-charts";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { StatModule } from "../../shared";
import { PageHeaderModule } from "../../shared";
@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    DashboardRoutingModule,
    StatModule,
    Ng2Charts,
   
    PageHeaderModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
