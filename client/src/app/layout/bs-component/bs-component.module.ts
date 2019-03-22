import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsComponentRoutingModule } from './bs-component-routing.module';
import { BsComponentComponent } from './bs-component.component';
import { RatingComponent } from './components';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    BsComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PageHeaderModule
  ],
  declarations: [
    BsComponentComponent,

    RatingComponent,
   ]
})
export class BsComponentModule {}
