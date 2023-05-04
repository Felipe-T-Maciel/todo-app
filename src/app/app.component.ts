import { Component } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { parse } from 'querystring';

interface Tarefa{
  id: number
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
  maiorLenght = 0
  Tarefa={
    id: 0,
    nome: '',
    desc: '',
    categoria: ''
  }

  novaTarefa():void{
    
    if(this.maiorLenght<this.atts.length){
      this.maiorLenght = this.atts.length
    }

    const att:Tarefa ={
      id: this.Tarefa.id = this.maiorLenght+1,
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
