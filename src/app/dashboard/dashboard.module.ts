import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from '../dashboard/dashboard.component' ;
import { AuthGuard } from '../route-guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent],
  providers: [AuthGuard]
})
export class DashboardModule { }
