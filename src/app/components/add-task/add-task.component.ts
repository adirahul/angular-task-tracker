import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, MatFormFieldModule, CommonModule, ButtonComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
  providers:[TaskService]
})

export class AddTaskComponent implements OnInit{
  taskName : string  = '';
  taskDate : string = '';
  isImportant : boolean = false;
  subscription!: Subscription;
  showAddTask: boolean = false;
  @Output()addTask: EventEmitter<Task> = new EventEmitter();
  
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }
  ngOnInit(): void { }

  onSubmit() {
    console.log(this.taskName);
    console.log(this.taskDate);
    if(!this.taskName)
    alert('please add some task!');
    this.addTask.emit({
      name: this.taskName,
      time: this.taskDate,
      reminder: this.isImportant,
    })
    
    this.taskName = ''
    this.taskDate = ''
    this.isImportant = false
  }
  
}
