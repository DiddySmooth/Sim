import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { JobInfoComponent } from './Components/job-info/job-info.component';
import { AgeUpAreaComponent } from './Components/age-up-area/age-up-area.component';
import { CitizenListComponent } from './Components/citizen-list/citizen-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    JobInfoComponent,
    AgeUpAreaComponent,
    CitizenListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
