import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlannerComponent } from './planner/planner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TraderComponent } from './trader/trader.component';

@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    DashboardComponent,
    TraderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
