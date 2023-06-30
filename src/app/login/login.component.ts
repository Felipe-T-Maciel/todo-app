import { Component } from "@angular/core";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.css']
})


export class LoginComponent{
    private users: User[] = [];
    user!: User;

    constructor(
        private userRepository: UserRepository
      ) {
          this.userRepository.getUsers().subscribe({
            next: (value) => {
                this.users = value
            },
          })
        }

    login(id, senha){
        this.users.forEach(element => {
            if(element.id === id && element.senha === senha){
                console.log(element)
                window.location.replace('http://localhost:4200/todo')
            }
        });
    }

}