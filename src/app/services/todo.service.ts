import { Injectable } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoId = 0;
  todoList: ITodo [] = [
    // example of how to make an item in todo list
    { title: 'Install Angular CLI', id: this.todoId, status: 'Todo', createdAt: 'Doing', description: 'Done' },

  ];
  constructor() { }
  getTodos() {
    return this.todoList;
  }
  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
  addTodo(todo: ITodo): void {
    todo.id = this.todoId ++;
    this.todoList.push(todo);
  }
}
