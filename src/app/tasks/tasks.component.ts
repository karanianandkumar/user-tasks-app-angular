import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input() name?: string;
  showAddTaskCard = false;
  constructor(private tasksService: TasksService) {}

  onStartAddTask() {
    this.showAddTaskCard = !this.showAddTaskCard;
  }

  onAddTaskClose() {
    this.showAddTaskCard = false;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
}
