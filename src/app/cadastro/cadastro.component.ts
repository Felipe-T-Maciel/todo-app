import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";
import { CookieService } from "src/services/cookies.service";

@Component({
    templateUrl: 'cadastro.html',
    styleUrls: ['cadastro.component.css']
})

export class cadastroComponent{

    private users: User[] = [];
    user!: User;
    private userRepository: UserRepository
    constructor(private http: HttpClient,private logado: CookieService, userRepository: UserRepository) {
        userRepository.getUsers().subscribe({
            next: (value) => {
                this.users = value
            },
          })
     }

    ngOnInit(){
        this.logado.deleteCookie('logado')
    }

    id: string
    name: string
    senha: string
    email: string


    cadastro(): void {
        let verificaUser: boolean = true
        const user: User = {
            id: this.id,
            name: this.name,
            senha: this.senha,
            email: this.email
        }

        if(this.id === '' || this.id === null || this.id === undefined ||
            this.senha === '' || this.senha === null || 
            this.senha === undefined || this.name === '' ||
            this.name === null || this.name === undefined ||
            this.email === '' || this.email === null || 
            this.email === undefined)
        {
            verificaUser = false
            alert('user nulo')
        }
        
        console.log(this.id)
            if(verificaUser){
                this.users.forEach(element => {
                    if(element.id === this.id || element.email === this.email){
                        alert('User ja cadastrado')
                        verificaUser = false
                    }
                });
            }
        
        if(verificaUser === true){
            alert("Cadastrado com sucesso")
            this.http.post<User[]>('http://localhost:4300/usuarios', user).subscribe((req)=>{})
            console.log(user)
            window.location.replace('http://localhost:4200/login')
        }

        this.id = ''
        this.name = ''
        this.senha = ''
        this.email = ''

    }


}