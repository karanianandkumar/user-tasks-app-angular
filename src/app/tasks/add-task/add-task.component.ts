import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  constructor(private tasksService: TasksService) {}
  // title = signal('');
  // summary = signal('');
  // dueDate = signal('');
  title = '';
  summary = '';
  dueDate = '';
  onCloseAddTask() {
    this.close.emit();
  }

  onSaveNewTask() {
    this.tasksService.addTask(
      {
        title: this.title,
        summary: this.summary,
        dueDate: this.dueDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
