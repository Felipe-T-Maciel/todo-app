import { Component } from '@angular/core';

interface Tarefa{
  nome: string
  desc: string
}

interface Categoria{
  categoria2: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  nome: string = '';
  desc: string = '';
  categoria: string = '';
  atts: Tarefa[] = []

  Tarefa={
    nome: '',
    desc: ''
  }

  novaTarefa():void{
    const att:Tarefa ={
      nome: this.Tarefa.nome,
      desc: this.Tarefa.desc
    }
    this.atts.push(att)
    this.Tarefa.nome = ''
    this.Tarefa.desc = ''
    localStorage.setItem("Lista de tarefas", JSON.stringify(this.atts))
  }

  Apaga(indice){
    console.log(indice);
    this.atts.splice(indice, 1)
    localStorage.removeItem("att")
    localStorage.setItem("Lista de tarefas", JSON.stringify(this.atts))
  }

}
