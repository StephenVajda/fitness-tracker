import { Component, OnInit } from '@angular/core';
import { Exercise } from "./exercise.model";

import {Subscription} from 'rxjs/Subscription';
import { TrainingService } from './training.service';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  ongoingTraining=false;
  private runningExercise:Exercise;
  exerciseSubscription:Subscription;
  constructor(private trainingService:TrainingService) { }

  ngOnInit() {
      this.exerciseSubscription=
      this.exerciseSubscription=this.trainingService.exercisechanged.subscribe(exercise =>{
        if(exercise){
          this.ongoingTraining=true;
        }
        else{
          this.ongoingTraining=false;
        }
        
      });
   
  
  }

}
