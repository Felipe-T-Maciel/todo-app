import { Component } from "@angular/core";

interface Tarefa{
  nome: string
  desc: string
  categoria: string
}

@Component({
  templateUrl: 'categoria.component.html',
})
export class CategoriaComponent {
  title = 'todo-app';
  categorias: string[] = []
  categoria: string
  atts: Tarefa[] = [];
  catDrag: string = '';



  cadastrarCategoria(): void {
    if(!this.verificaCatIgual() || !this.categoria){
      return
    }
    const novaCategoria = this.categoria
    this.categorias.push(novaCategoria);
    console.log(this.categorias)
    this.categoria = '';
    localStorage.setItem('categorias', JSON.stringify(this.categorias));
  }
  
  removerCat(indice){
    this.atts.splice(indice, 1);
    this.categorias.splice(indice, 1);
    localStorage.setItem('categorias', JSON.stringify(this.categorias));
  }

  ngOnInit(): void {
    const categoria = window.localStorage.getItem('categorias') || '[]';
    this.categorias = JSON.parse(categoria);


    const listaTarefas = window.localStorage.getItem('Lista de tarefas') || '[]';
    this.atts = JSON.parse(listaTarefas);
  }

  verificaCatIgual(){
    for(let i=0;i<this.categorias.length;i++){
      if(this.categorias[i] === this.categoria){
        return false
      }
    }
    return true
  }
}