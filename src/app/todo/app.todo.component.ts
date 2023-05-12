import { Component } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { parse } from 'querystring';

interface Tarefa{
  nome: string
  desc: string
  categoria: string
}


@Component({
  templateUrl: 'app.todo.component.html'
})
export class TodoComponent {
  categorias: string[] = []
  categoria: string;

  ngOnInit(): void {
    const listaTarefas = window.localStorage.getItem('Lista de tarefas') || '[]';
      this.atts = JSON.parse(listaTarefas);

    const categoria = window.localStorage.getItem('categorias') || '[]';
    this.categorias = JSON.parse(categoria);
  }
  categoriasLocal = window.localStorage.getItem('categorias');

  title = 'todo-app';
  atts: Tarefa[] = [];
  Tarefa={
    nome: '',
    desc: '',
    categoria: this.categoriasLocal
  }

  novaTarefa():void{
    const att:Tarefa ={
      nome: this.Tarefa.nome,
      desc: this.Tarefa.desc,
      categoria: this.Tarefa.categoria
    }
    this.atts.push(att)
    
    this.Tarefa.nome = null
    this.Tarefa.desc = null
    this.Tarefa.categoria = null
    this.localStorage()
  }

  Apaga(indice){
    this.atts.splice(indice, 1)
    this.localStorage()
  }

  localStorage(){
    localStorage.setItem("Lista de tarefas", JSON.stringify(this.atts))
  }

}
