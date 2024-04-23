import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatCardContent,
  MatCard,
  MatCardTitle,
  MatCardTitleGroup,
  MatCardSubtitle,
  MatCardHeader,
  MatCardActions,
  MatCardFooter,
  MatCardModule,
} from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Task } from '../task.interface';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Params, RouterLink, RouterModule } from '@angular/router';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TasksService } from '../tasks.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [
    MatDivider,
    DashboardComponent,
    MatSlideToggleModule,
    MatDialogModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardContent,
    MatCard,
    MatCardModule,
    MatCardTitle,
    MatCardTitleGroup,
    MatCardSubtitle,
    MatCardHeader,
    MatSelectModule,
    MatCardActions,
    MatCardFooter,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterLink,
  ],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent {
  // @Input() task!: Task;
  statuses = ['To do', 'In process', 'Done'];
  task!: any;
  taskId!: any;
  tasks: Task[] = [];

  constructor(
    private dashboard: DashboardComponent,
    private activatedRoute: ActivatedRoute // @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    // console.log(this.data);
    this.tasks = this.dashboard.fetchedData;
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.taskId = params['id'];
          console.log(this.taskId)
          console.log(this.dashboard.fetchedData);
          this.task = this.dashboard.fetchedData.find((t) => {
               return t.id === this.taskId;
             });
        }
      );
    // this.taskId = this.activatedRoute.snapshot.paramMap.get('id');
    // 
  }
}
