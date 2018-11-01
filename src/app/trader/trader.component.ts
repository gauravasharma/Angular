import { NgModule,Component,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import { HttpClient } from '@angular/common/http';
import { PlannerElements} from '../model/PlannerElements';
import { Customer} from '../model/Customer';
import { PlannerService } from '../service/planner/planner.service';
import autocomplete from 'devextreme/ui/autocomplete';

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.css']
})
export class TraderComponent implements OnInit {

    columns: Array<any>;
      public myItems: PlannerElements[] = [];

    rowData : PlannerElements[];
    customers: Customer[];
  constructor( private plannerService:PlannerService) { 
    this.columns = [
        {"caption": "Element" ,"dataField": "elementId", "width":"auto"},
        {"caption": "HE1","dataField": "HE1", "width":"auto"},
        {"caption": "HE2","dataField": "HE2"},
        {"caption": "HE3","dataField": "HE3"},
        {"caption": "HE4","dataField": "HE4"},
        {"caption": "HE5","dataField": "HE5"},
        {"caption": "HE6","dataField": "HE6"},
        {"caption": "HE7","dataField": "HE7"},
        {"caption": "HE8","dataField": "HE8"},
        {"caption": "HE9","dataField": "HE9"},
        {"caption": "HE10","dataField":"HE10"},
        {"caption": "HE11","dataField":"HE11"},
        {"caption": "HE12","dataField":"HE12"},
        {"caption": "HE13","dataField":"HE13"},
        {"caption": "HE14","dataField":"HE14"},
        {"caption": "HE15","dataField":"HE15"},
        {"caption": "HE16","dataField":"HE16"},
        {"caption": "HE17","dataField":"HE17"},
        {"caption": "HE18","dataField":"HE18"},
        {"caption": "HE19","dataField":"HE19"},
        {"caption": "HE20","dataField":"HE20"},
        {"caption": "HE21","dataField":"HE21"},
        {"caption": "HE22","dataField":"HE22"},
        {"caption": "HE23","dataField":"HE23"},
        {"caption": "HE24","dataField":"HE24"}
    ];
  }

      onContentReady(e) {
        e.component.option("loadPanel.enabled", false);
    }
  getHeroes(): void {
    
    for (let item of this.columns) {
     if(item.caption=="Element")
      {
        item.width="120";
        item.fixed=true
      }
      else
      {
        item.width="60";
      }
}
    this.plannerService.getHeroes().subscribe(rowData => this.myItems = rowData);
   

  }
  ngOnInit() {
    this.getHeroes();
  }
}
