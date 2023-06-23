import { Component } from "@angular/core";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";

@Component({
    templateUrl: 'login.component.html',
})


export class LoginComponent{
    private userId: string = 'diogo.defante';
    private users: User[] = [];
    user!: User;

    constructor(
        private userRepository: UserRepository
      ) {
          this.userRepository.getUsers().subscribe({
            next: (value) => {
                console.log(value)
            },
          })
        }

    login(id){
        let procura: boolean = true
        if(procura){
            this.users.forEach(element => {
                if(element.id === id){
                    this.userRepository.setLogado(element)
                    window.location.replace('http://localhost:4200/todo')
                }
            });
        }
    }

}