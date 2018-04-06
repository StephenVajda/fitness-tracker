import { Exercise } from "./exercise.model";
import{Subject} from 'rxjs/Subject';

export class TrainingService {
    private exercises:Exercise[]=[];
    private availableExercies: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        {
            id: 'touch-toes', name: 'Touch Toes',

            duration: 180, calories: 15
        },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        {

            id: 'burpees', name: 'Burpees', duration: 60, calories: 8
        }
    ];
    private runningExercise:Exercise;
    exercisechanged=new Subject<Exercise>();

    getAvailableExercises(){
        return this.availableExercies.slice();
    }

    startExercise(selectedId:string){
        this.runningExercise=this.availableExercies.find(ex => ex.id==selectedId);
        this.exercisechanged.next({...this.runningExercise});      
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