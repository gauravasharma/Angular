import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlannerComponent} from './planner/planner.component';
import { TraderComponent} from './trader/trader.component';
import { DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'planner', component: PlannerComponent },
  { path: 'trader', component: TraderComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
