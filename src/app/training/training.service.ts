import {Injectable} from '@angular/core';
import { Exercise } from "./exercise.model";
import{Subject} from 'rxjs/Subject';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class TrainingService {
    exercisesChanged=new Subject<Exercise []>();
    private  availableExercises: Exercise[] = [];
    private runningExercise:Exercise;

    constructor(private db:AngularFirestore){

    }

    fetchAvailableExercises(){
       this.db.collection('availableExcercises')
      .snapshotChanges()
      .map(docArray =>{
        return docArray.map(doc=>{
           return{
             id:doc.payload.doc.id,
             name:doc.payload.doc.data().name,
             duration:doc.payload.doc.data().duration,
             calories:doc.payload.doc.data().calories
          }
         })
      })
      .subscribe((exercises:Exercise[])=>{
          this.availableExercises=exercises;
          this.exercisesChanged.next( ...this.availableExercises);
      })
    }

    startExercise(selectedId:string){
        this.runningExercise=this.availableExercises.find(ex => ex.id==selectedId);
        this. exercisesChanged.next({...this.runningExercise});      
    }
    completeExercise(){
        this.exercises.push({...this.runningExercise,date:new Date(),state:'completed'});
        this.runningExercise=null;
        this.exercisechanged.next(null);
    }
    cancelExercise(progress:number){
        this.exercises.push({
            ...this.runningExercise,
            duration:this.runningExercise.duration * (progress/100),
            calories:this.runningExercise.calories * (progress/100),
            date:new Date(),
            state:'cancelled'
        });
               
    }
    getRunningExercise(){
        return {...this.runningExercise};
    }

    getCompletedOrCancelledExcercises(){
        return this.exercises.slice();
    }

}