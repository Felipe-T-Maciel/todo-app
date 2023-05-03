import { Component } from '@angular/core';

interface Tarefa{
  nome: string
  desc: string
  categoria: string
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
  cats: Categoria[] = []
  atts: Tarefa[] = []

  Tarefa={
    nome: '',
    desc: ''
  }

  Categoria={
    categoria:''
  }

  inputMudou(event):void{
    console.log(event)
  }

  novaTarefa():void{
    const att:Tarefa ={
      nome: this.Tarefa.nome,
      desc: this.Tarefa.desc,
      categoria: this.Tarefa.categoria
    }
    this.atts.push(att)
    this.CategoriaFunc(att.categoria)
    this.Tarefa.nome = ''
    this.Tarefa.desc = ''
  }

  CategoriaFunc(categoria):void{
    const cat: Categoria={
      categoria: this.Tarefa.categoria
    }
  }

}
