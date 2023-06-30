import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";

@Component({
    templateUrl: 'cadastro.html',
    styleUrls: ['cadastro.component.css']
})

export class cadastroComponent{

    private users: User[] = [];
    user!: User;
    private userRepository: UserRepository
    constructor(private http: HttpClient, userRepository: UserRepository) {
        userRepository.getUsers().subscribe({
            next: (value) => {
                this.users = value
            },
          })
     }




    id: string
    nome: string
    senha: string
    email: string


    cadastro(): void {
        let verificaUser: boolean = true
        const user: User = {
            id: this.id,
            nome: this.nome,
            senha: this.senha,
            email: this.email
        }
        

        this.users.forEach(element => {
            if(element.id === this.id){
                alert('User ja cadastrado')
                verificaUser = false
            }
        });

        if(verificaUser === true){
            alert("Cadastrado com sucesso")
            this.http.post<User[]>('http://localhost:4300/usuarios', user).subscribe((req)=>{})
            console.log(user)
            window.location.replace('http://localhost:4200/login')
        }

        this.id = ''
        this.nome = ''
        this.senha = ''
        this.email = ''


    }


}