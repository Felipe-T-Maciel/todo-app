import { Component } from "@angular/core";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";
import { AuthGuardAutorize } from "src/services/auth-Guard/auth-guard-Autorize.service";
import { AuthGuardServicesGuard } from "src/services/auth-Guard/auth-guard-services.guard";
import { LogadoComponent } from "src/services/login.service";

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.css']
})


export class LoginComponent{
    private users: User[] = [];
    user!: User;


    constructor(
        private userRepository: UserRepository,
        private logado: LogadoComponent,
        private can: AuthGuardAutorize
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
                this.logado.setCookie('logado',JSON.stringify(element))
            
                if(this.can.autorizado()){
                    window.location.replace('http://localhost:4200/todo')
                }
            }
        });
    }

}