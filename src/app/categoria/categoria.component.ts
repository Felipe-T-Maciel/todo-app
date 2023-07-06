import { Component } from "@angular/core";
import { CookieService } from "src/services/cookies.service";

interface Tarefa{
  nome: string
  desc: string
  categoria: string
}

@Component({
  templateUrl: 'categoria.component.html',
})
export class CategoriaComponent {

  constructor(
    private cookie: CookieService
  ){}

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
    this.cookie.setCookie('categorias',JSON.stringify(this.categorias),1)
  }
  
  removerCat(indice){
    this.atts.splice(indice, 1);
    this.categorias.splice(indice, 1);
    this.cookie.deleteCookie('categorias')
    this.cookie.setCookie('categorias',JSON.stringify(this.categorias),1)
  }

  ngOnInit(): void {
    const categoria = this.cookie.getCookie('categorias') || '[]';
    this.categorias = JSON.parse(categoria);


    const listaTarefas = this.cookie.getCookie('Lista de tarefas') || '[]';
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