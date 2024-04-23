import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatCardContent,
  MatCard,
  MatCardTitle,
  MatCardTitleGroup,
  MatCardSubtitle,
  MatCardHeader,
  MatCardActions,
  MatCardFooter,
} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatDialogModule,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, RouterLink } from '@angular/router';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { Task } from '../task.interface';
import { HttpClientModule } from '@angular/common/http';
import {Location} from '@angular/common';

@Component({
  selector: 'app-task-detail',
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
    HttpClientModule
  ],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css',
})
export class TaskDetailComponent implements OnInit {
  @Input() task!: Task;
  @Output() editTask = new EventEmitter<Task>();
  inputData: any;
  statuses = ['To do', 'In process', 'Done'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<TaskDetailComponent>,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.inputData = this.data;
  }

  closeDialog() {
    this.ref.close();
  }
  
  backClicked() {
    this.location.back();
  }

  sendTask(task :Task) {
   // this.editTask.emit(task);
  }
}
