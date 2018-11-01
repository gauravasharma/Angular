import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlannerComponent } from './planner/planner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TraderComponent } from './trader/trader.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { DxDataGridModule } from "devextreme-angular";

@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    DashboardComponent,
    TraderComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
