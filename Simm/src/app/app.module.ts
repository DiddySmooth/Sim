import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PlayerInfoComponent } from './Components/player-info/player-info.component';
import { JobInfoComponent } from './Components/job-info/job-info.component';
import { AgeUpAreaComponent } from './Components/age-up-area/age-up-area.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayerInfoComponent,
    JobInfoComponent,
    AgeUpAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
