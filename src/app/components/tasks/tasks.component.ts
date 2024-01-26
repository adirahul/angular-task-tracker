import { Component, OnInit } from '@angular/core';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { Task } from '../../Task';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskDetailsComponent, AddTaskComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  providers: [TaskService]
})
export class TasksComponent implements OnInit{

  constructor(private taskService: TaskService) {}
  tasks!: Task[];

  ngOnInit() {
    this.taskService
      .getAllTasks()
      .subscribe((tasks) => this.tasks = tasks);
  }

  onAddTask(task: Task){
    console.log('inside onaddtask',task);
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
  onDeleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe((task) => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }
}
