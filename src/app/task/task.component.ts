import { MatDialog } from '@angular/material/dialog';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup,
  MatCardFooter,
} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardActions } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Task } from '../task.interface';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    EditTaskComponent,
    MatSlideToggleModule,
    MatDialogModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardContent,
    MatCard,
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
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    RouterLink,
    RouterModule
  ],
  providers: [MatDatepickerModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Task;
  statuses = ['To do', 'In process', 'Done'];
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(TaskDetailComponent, {
      width: '400px',
      data: {task: this.task}
    })
    this.task
  }
}
