import { Component, OnInit } from '@angular/core';
import {TasksService} from "../tasks.service";
import {Task} from "../task";
import {forkJoin, Observable} from "rxjs";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public tasks: Task[] = [];
  public newTask: Task = {};
  public isProcessing = false;

  constructor(private taskService: TasksService) {
  }

  ngOnInit() {
   this.taskService.index().subscribe((tasks) => {
     this.tasks = tasks;
   });
  }

  addTask() {
    if (this.newTask.title) {
      this.isProcessing = true;
      this.newTask.completed = false;
      this.newTask.archived = false;

      this.tasks.unshift(this.newTask);

      this.taskService.post(this.newTask).subscribe((task) => {
        this.newTask = {};
        this.ngOnInit();
      });
    }
  }

  handleChange(task: Task) {
    this.taskService.put(task).subscribe({error: error => {
        alert(error)
        this.ngOnInit();
      }
    });
  }

  archiveCompleted() {
    this.isProcessing = true;
    const observables: Observable<any>[] = [];
    for (const task of this.tasks) {
      if (task.completed) {
        task.archived = true;
        observables.push(this.taskService.put(task));
      }
    }

    forkJoin(observables).subscribe(() => {
      this.ngOnInit();
    });
    this.isProcessing = false;
  }

  canArchiveCompleted() {
    for (const task of this.tasks) {
      if (task.completed) {
        return true;
      }
    }
    return this.isProcessing;
  }

  canAddTask() {
    if (this.newTask.title) {
      return true;
    }
    return this.isProcessing;
  }
}
