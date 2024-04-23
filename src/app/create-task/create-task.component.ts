import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {Location} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule, MatButtonModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  constructor(private location: Location) {}

  backClicked() {
    this.location.back();
  }
}
