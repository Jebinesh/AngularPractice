import { Component, OnInit } from '@angular/core';

class Todo {
  constructor(public id: number, public description: string, public done: boolean, public targetedDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos =[
    new Todo(1,'Learn Angular',false,new(Date)),
    new Todo(2,'Learn JavaScript',false,new(Date)),
    new Todo(3,'Learn Java',false,new(Date)),
    new Todo(4,'Learn JSP',false,new(Date))
  ]

  // todos = [
  //   { id: 1, name: 'Learn', time: '20.0' },
  //   { id: 2, name: "JSP", time: '20.0' },
  //   { id: 3, name: "ANgualr", time: '20.0' }
  // ]

  // todos={
  //   id : 1,
  //   name :'Learn to dance',
  //   time :2.0
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
