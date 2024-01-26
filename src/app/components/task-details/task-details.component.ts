import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FontAwesomeModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css',
  providers: []
})
export class TaskDetailsComponent implements OnInit {
  isMyClass = true;
  isOtherClass = false;

  constructor() {}
  ngOnInit(): void {
  }
  
  @Output() onDelete: EventEmitter<Task> = new EventEmitter();
  
  @Input()
  task!: Task;
  faTimes = faTimes;
  
  onClickDelete(task: Task): void {
    this.onDelete.emit(task);
  }
}
