export interface Task {
  id: string;
  userId: string;
  summary: string;
  title: string;
  dueDate: string;
}

export interface NewTaskData {
  summary: string;
  title: string;
  dueDate: string;
}
