import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { LoginService } from './login/login.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', loadChildren: './login/login.module#LoginModule'},
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'}
]

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
