import { Component } from "@angular/core";


@Component({
  templateUrl: 'categoria.component.html',
})
export class CategoriaComponent {
  title = 'todo-app';
  categorias: string[] = []
  categoria: string

  cadastrarCategoria(): void {
    const novaCategoria = this.categoria
    this.categorias.push(novaCategoria);
    console.log(this.categorias)
    this.categoria = '';
    localStorage.setItem('categorias', JSON.stringify(this.categorias));
  }
  
  removerCat(indice){
    this.categorias.splice(indice, 1);
    localStorage.setItem('categorias', JSON.stringify(this.categorias));
  }

  ngOnInit(): void {
    const categoria = window.localStorage.getItem('categorias') || '[]';
      this.categorias = JSON.parse(categoria);
  }
}