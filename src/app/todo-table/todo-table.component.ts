import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {
  dataSource: MatTableDataSource<ITodo>;
  displayedColumns: string [] = ['id', 'title', 'status', 'description', 'createdAt'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.todoService.getTodos());
    this.dataSource.sort = this.sort;
  }

  applyfilter(filtervalue: string) {
    this.dataSource.filter = filtervalue.trim().toLowerCase();
  }
}
