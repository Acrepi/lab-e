import {Component, OnInit} from '@angular/core';
import {Task} from "../task";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private taskService: TasksService) {
  }

  ngOnInit() {
    this.taskService.index(true).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    if(confirm("Are you sure?")) {
      this.taskService.delete(task).subscribe(() => {
        this.ngOnInit();
      });
    }
  }
}
