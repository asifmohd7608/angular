import { Injectable } from '@angular/core';
import {TASKS} from '../tasks'
import { Task } from '../interfaces/Task'
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks=():Observable<Task[]>=>{
    const task=of(TASKS)
    return task
  }
}
