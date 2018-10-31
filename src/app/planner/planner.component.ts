import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlannerElements} from '../model/PlannerElements';
import { PlannerService } from '../service/planner/planner.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {


  columnDefs = [
        {headerName: 'Element', field: 'elementId' , width:100 , pinned: 'left'},
        {headerName: 'HE1', field: 'HE1', width:75,editable:true},
        {headerName: 'HE2', field: 'HE2', width:75,editable:true},
        {headerName: 'HE3', field: 'HE3', width:75,editable:true},
        {headerName: 'HE4', field: 'HE4', width:75,editable:true},
        {headerName: 'HE5', field: 'HE5', width:75,editable:true},
        {headerName: 'HE6', field: 'HE6', width:75,editable:true},
        {headerName: 'HE7', field: 'HE7', width:75,editable:true},
        {headerName: 'HE8', field: 'HE8', width:75,editable:true},,
        {headerName: 'HE9', field: 'HE9', width:75,editable:true},
        {headerName: 'HE10', field: 'HE10', width:75,editable:true},
        {headerName: 'HE11', field: 'HE11', width:75,editable:true},
        {headerName: 'HE12', field: 'HE12', width:75,editable:true},
        {headerName: 'HE13', field: 'HE13' , width:75,editable:true},
        {headerName: 'HE14', field: 'HE14', width:75,editable:true},
        {headerName: 'HE15', field: 'HE15', width:75,editable:true},
        {headerName: 'HE16', field: 'HE16', width:75,editable:true},
        {headerName: 'HE17', field: 'HE17' , width:75,editable:true},
        {headerName: 'HE18', field: 'HE18', width:75,editable:true},
        {headerName: 'HE19', field: 'HE19' , width:75,editable:true},
        {headerName: 'HE20', field: 'HE20', width:75,editable:true},
        {headerName: 'HE21', field: 'HE21', width:75,editable:true},
        {headerName: 'HE22', field: 'HE22', width:75,editable:true},
        {headerName: 'HE23', field: 'HE23' , width:75,editable:true},
        {headerName: 'HE24', field: 'HE24', width:75,editable:true},
    ];

    rowData : PlannerElements[];
  constructor( private plannerService:PlannerService) { }

  getHeroes(): void {
    this.plannerService.getHeroes().subscribe(rowData => this.rowData = rowData);
  }
  ngOnInit() {
    this.getHeroes();
  }
}
