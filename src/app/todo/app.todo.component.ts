import { Component } from '@angular/core';
import { CategoriaComponent } from '../categoria/categoria.component';

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
  categoriaDrop: string
  tarefaDrop: Tarefa
  indexDrop: number

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
    categoria: ''
  }

  novaTarefa():void{
    if(!this.Tarefa.nome || !this.Tarefa.categoria){
      return
    }
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
  
  allowDrag(cat){
   this.tarefaDrop.categoria = cat
   this.localStorage()
  }

  drag(att){
   this.tarefaDrop = att  
   this.localStorage()
  }


  drop(event: Event, indice){
    event.preventDefault()
    this.atts.splice(this.atts.indexOf(this.tarefaDrop), 1)
    this.atts.splice(indice,0,this.tarefaDrop)
    this.localStorage()
  }


}
