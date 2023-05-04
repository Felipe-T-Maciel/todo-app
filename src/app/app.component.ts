import { Component } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { parse } from 'querystring';

interface Tarefa{
  nome: string
  desc: string
  categoria: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit():void{
    this.atts = JSON.parse(window.localStorage.getItem("Lista de tarefas"))
  }

  title = 'todo-app';
  atts: Tarefa[] = []
  
  Tarefa={
    nome: '',
    desc: '',
    categoria: ''
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
