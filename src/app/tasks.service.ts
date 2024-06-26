import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Task } from './task.interface';


@Injectable({
  providedIn: 'root',
})
export class TasksService {
  fetchedData: Task[]= [];
  toDoTasks: Task[] = [];
  inProcessTasks: Task[] = [];
  doneTasks: Task[] = [];
  result: any;
  index: any;

  private status: string[] = ['To do', 'In process', 'Done'];
  private tasksUrl: string =
    'https://65e6f72b53d564627a8d7d22.mockapi.io/api/tasks/tasks';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<Task[]> {
    this.result = this.http.get<Task[]>(this.tasksUrl).subscribe((data) => {
      this.fetchedData = data.map((el) => {
        el.status = this.getStatus();
        if (el.status === 'To do') {
          this.toDoTasks.push(el);
          return el;
        }
        if (el.status === 'In process') {
          this.inProcessTasks.push(el);
          return el;
        } else {
          this.doneTasks.push(el);
          return el;
        }
      });
    });
    return this.result
  }

  deleteTask(id: string): void {
     this.index = this.fetchedData.findIndex(task => task.id === id);
     this.fetchedData.splice(this.index, 1);
  }

  getStatus(): string {
    const num = Math.floor(Math.random() * 3);
    return this.status[num];
  }
}
