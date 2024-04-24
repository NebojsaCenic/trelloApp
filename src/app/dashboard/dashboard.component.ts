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
  fetchedData: Task[] = this.tasksService.fetchedData;
  toDoTasks: Task[] = this.tasksService.toDoTasks;
  inProcessTasks: Task[] = this.tasksService.inProcessTasks;
  doneTasks: Task[] = this.tasksService.doneTasks;

  constructor(public tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.fetchData();
    console.log('dashboard Init')
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
