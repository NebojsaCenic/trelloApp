import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { CdkTableModule } from '@angular/cdk/table';
import { TaskComponent } from '../task/task.component';
import { TasksService } from '../tasks.service';
import { Task } from '../task.interface';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TaskComponent,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    CdkTableModule,
    RouterOutlet,
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  fetchedData: Task[] = this.apiTasks.fetchedData;
  toDoTasks: Task[] = this.apiTasks.toDoTasks;
  inProcessTasks: Task[] = this.apiTasks.inProcessTasks;
  doneTasks: Task[] = this.apiTasks.doneTasks;

  constructor(public apiTasks: TasksService) {}

  ngOnInit(): void {
    this.apiTasks.fetchData();
  }

  // fetchDataFromApi(): void {
  //   this.apiTasks.fetchData().subscribe((data) => {
  //     this.fetchedData = data.map((el) => {
  //       el.status = this.apiTasks.getStatus();
  //       if (el.status === 'To do') {
  //         this.toDoTasks.push(el);
  //         return el;
  //       }
  //       if (el.status === 'In process') {
  //         this.inProcessTasks.push(el);
  //         return el;
  //       } else {
  //         this.doneTasks.push(el);
  //         return el;
  //       }
  //     });
  //   });
  // }
}
