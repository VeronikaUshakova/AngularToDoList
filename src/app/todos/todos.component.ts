import { TodosService } from './../shared/todos.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  constructor(public todosService: TodosService) { }

  public loading:boolean = true;
  public search:string = '';

  ngOnInit(): void {
    this.todosService.fetchTodos()
    .pipe(delay(500))
    .subscribe(()=>{
      this.loading = false;
    })
  }

  onChange(id: number){
    this.todosService.onToggle(id);
  }

  removeTodo(id: number){
    this.todosService.removeTodo(id);
  }

}
