import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'task/edit/:id', component: EditTaskComponent },
  { path: 'task/create', component: CreateTaskComponent },
];
