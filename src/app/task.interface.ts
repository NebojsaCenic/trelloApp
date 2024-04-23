export interface Task {
  status: string;
  id: string;
  title: string;
  description: string;
  assignee: string;
  dueDate: Date;
}
