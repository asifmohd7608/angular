import { Component, OnInit } from '@angular/core';
import { Task } from './interfaces/Task';
import { TaskService } from './services/task.service';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  tasks:Task[]=[]

  constructor(private taskService:TaskService){}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks)
  }
}
