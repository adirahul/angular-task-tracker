import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/tasks';

  getAllTasks(): Observable<Task[]> {
    return this.http
      .get<Task[]>(this.apiUrl);
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
  deleteTask(task: Task){
    const api = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(api);
  }
}
