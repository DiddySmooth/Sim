import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { JobInfoComponent } from './Components/job-info/job-info.component';
import { AgeUpAreaComponent } from './Components/age-up-area/age-up-area.component';
import { CitizenListComponent } from './Components/citizen-list/citizen-list.component';
import { MessageScreenComponent } from './Components/message-screen/message-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    JobInfoComponent,
    AgeUpAreaComponent,
    CitizenListComponent,
    MessageScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
