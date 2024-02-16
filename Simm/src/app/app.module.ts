import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { CitizenListComponent } from './Components/citizen-list/citizen-list.component';
import { MessageScreenComponent } from './Components/message-screen/message-screen.component';
import { CitizenInfoScreenComponent } from './Components/citizen-info-screen/citizen-info-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CitizenListComponent,
    MessageScreenComponent,
    CitizenInfoScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
