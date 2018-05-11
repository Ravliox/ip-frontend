import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../route-guards/auth.guard';
import { MembersComponent } from './child-modules/members/members/members.component';

const routes: Routes = [
  { path: "", component: DashboardComponent, canActivate: [AuthGuard], children: [
    { path: "", redirectTo: "members", pathMatch: "full" },
    { path: "members", loadChildren: './child-modules/members/members.module#MembersModule' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
