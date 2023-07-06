import { Component } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';  
import { CookieService } from 'src/services/cookies.service';

interface Tarefa{
  nome: string
  desc: string
  categoria: string
}


@Component({
  templateUrl: 'app.todo.component.html'
})
export class TodoComponent {

  private userId: string = 'henrique.santos';
  private users: User[] = [];
  user!: User;

  constructor(
    private userRepository: UserRepository,
    private cookie: CookieService
  ) {
      this.userRepository.getUsers().subscribe({
        next: (value) => {
            console.log(value)
        },
      })
    }



  categorias: string[] = []
  categoria: string;
  categoriaDrop: string
  tarefaDrop: Tarefa
  indexDrop: number

  ngOnInit(): void {
    const listaTarefas = this.cookie.getCookie('Lista de tarefas') || '[]';
      this.atts = JSON.parse(listaTarefas);

    const categoria = this.cookie.getCookie('categorias') || '[]';
    this.categorias = JSON.parse(categoria);

    this.categoriasLocal = this.cookie.getCookie('categorias')
  }
  categoriasLocal: any;

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
    this.Cookie()
  }

  Apaga(indice){
    this.atts.splice(indice, 1)
    this.cookie.deleteCookie('Lista de Tarefas')
    this.Cookie()
  }

  Cookie(){
    this.cookie.setCookie('Lista de Tarefas', JSON.stringify(this.atts), 1)
  }
  
  allowDrag(cat){
   this.tarefaDrop.categoria = cat
   this.Cookie()
  }

  drag(att){
   this.tarefaDrop = att  
   this.Cookie()
  }


  drop(event: Event, indice){
    event.preventDefault()
    this.atts.splice(this.atts.indexOf(this.tarefaDrop), 1)
    this.atts.splice(indice,0,this.tarefaDrop)
    this.Cookie()
  }

  // adicionarTarefa(): void {
  //   if (!this.hasPermission('Add')) {
  //     alert('Não pode cadastrar');
  //     return;
  //   }
  //   alert('Pode cadastrar');
  // }

  // editarTarefa(): void {
  //   if (!this.hasPermission('Edit')) {
  //     alert('Não pode cadastrar');
  //     return;
  //   }
  //   alert('Pode cadastrar');
  // }

  // removerTarefa(): void {
  //   if (!this.hasPermission('Remove')) {
  //     alert('Não pode cadastrar');
  //     return;
  //   }
  //   alert('Pode cadastrar');
  // }

  // hasPermission(permission: string): boolean {
  //   return this.user.cardPermissions.some((cardPermission) => {
  //     return cardPermission === permission;
  //   });
  // }

  // private getUsuarioLogado(): User {
  //   return this.users.find((user) => {
  //     return user.id === this.userId
  //   }) as User;
  // }


}
