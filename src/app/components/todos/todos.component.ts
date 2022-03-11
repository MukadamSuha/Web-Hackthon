import { Component, OnInit } from '@angular/core';

import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  item_count: number = 0;

  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        id: 0,
        content: 'get some $H!T done!',
        completed: false,
      },
    ];
  }

  toggleTaskComplete(id) {
    this.todos.map((value, index) => {
      if (index == id) {
        value.completed = !value.completed;
      }
      return value;
    });
  }

  addTodo() {
    let item_exists = 0;

    if (this.inputTodo === '') {
      alert('Todo cannot be empty');
      return;
    }

    this.todos.map((todo, index) => {
      if (todo.content === this.inputTodo) {
        alert('Todo already exists');
        item_exists = 1;
        return;
      }
    });

    if (item_exists == 0) {
      this.todos.push({
        id: this.item_count + 1,
        content: this.inputTodo,
        completed: false,
      });
      this.item_count++;
    }
  }
}
