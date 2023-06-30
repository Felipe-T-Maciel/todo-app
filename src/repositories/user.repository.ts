import { Injectable } from "@angular/core";
import { User } from "src/models/users/user";
import { HttpClient } from '@angular/common/http';
import { Observable} from "rxjs";
import { map} from "rxjs/operators";

const API_URL = 'http://localhost:4300/usuarios'

@Injectable()
export class UserRepository {
    private userRepository: UserRepository
    constructor(private http: HttpClient) {
     }

    private logado !: User;

    getLogado(): User | null {
        return this.logado;
    }

    setLogado(user: User): void {
        this.logado = user;
    }

    public getUsers(): Observable<User[]>{
        return this.http.get<User[]>(API_URL)
        .pipe(map(values => {
            const users: User[] = [];
            for (const value of values){
                users.push(Object.assign(new User(), value))
            }
            return users;
        })) 
    }

}
