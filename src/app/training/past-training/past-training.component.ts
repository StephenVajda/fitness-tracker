import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import {Exercise} from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit,AfterViewInit {
  displayedColumns=["date","name","duration","calories","state"];
  dataSource=new MatTableDataSource<Exercise>();
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(private trainingService:TrainingService ) { 
    console.log("Past training loaded");
  }

  ngOnInit() {
    this.dataSource.data=this.trainingService.getCompletedOrCancelledExcercises();
  }
  ngAfterViewInit(){
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }
  doFilter(filterValue:string){
  this.dataSource.filter=filterValue.trim().toLowerCase();
  }
}
