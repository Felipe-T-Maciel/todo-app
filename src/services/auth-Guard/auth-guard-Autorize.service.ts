import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/models/users/user';
import { CookieService } from '../cookies.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAutorize{
    constructor(
        private cookieLogado: CookieService,
        private router: Router
    ){
      const logado = cookieLogado.getCookie('logado') || null
      this.logado = JSON.parse(logado)
      console.log(logado)
    }

    logado: User

    autorizado(): boolean{
      if(this.logado){
        return true
      }
      window.location.replace("http://localhost:4200/login")
      return false
    }

    

    

    
}