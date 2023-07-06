import { Injectable } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';
import { LogadoComponent } from '../login.service';
import { AuthGuardServicesGuard } from './auth-guard-services.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAutorize{
    constructor(
        private cookieLogado: LogadoComponent,
    ){
      const logado = cookieLogado.getCookie('logado') || null
      this.logado = JSON.parse(logado)
    }

    logado: User

    autorizado(): boolean{
      if(this.logado){
        return true
      }
      else{
        return false
      }
    }
}