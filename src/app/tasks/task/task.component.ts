import { Component, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  constructor(private tasksService: TasksService) {}

  onTaskComplete() {
    this.tasksService.removeTask(this.task.id);
  }
}
