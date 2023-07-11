import { Component } from "@angular/core";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";
import { CookieService } from "src/services/cookies.service";

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.css']
})


export class LoginComponent{
    private users: User[] = [];
    user!: User;


    constructor(
        private userRepository: UserRepository,
        private logado: CookieService
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
                
                if(this.logado){
                    this.logado.deleteCookie('logado')
                }
                this.logado.setCookie('logado',JSON.stringify(element),1)
                
                window.location.replace('http://localhost:4200/todo')
                
            }
        });
    }

    ngOnInit(){
        this.logado.deleteCookie('logado')
    }
}