import { Component, OnInit,OnDestroy,Output } from '@angular/core';
import {TrainingService} from '../training.service';
import { Exercise } from '../exercise.model';
import {NgForm} from '@angular/forms';
import {Observable,Subscription} from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit,OnDestroy {
   exercises:Exercise[];
   exerciseSubscription:Subscription;

  constructor(private trainingService:TrainingService)
      {

     }

 

  ngOnInit() {
    this.exerciseSubscription=this.trainingService.exercisesChanged
      .subscribe(exercises=>{
        this.exercises=this.exercises;
      });
      this.trainingService.fetchAvailableExercises();
   }

   ngOnDestroy(){
     this.exerciseSubscription.unsubscribe();
   }
  
  onStartTraining(form:NgForm){
     this.trainingService.startExercise(form.value.exercise.id);
  }
}
