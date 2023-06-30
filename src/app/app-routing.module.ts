import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CategoriaComponent } from "src/app/categoria/categoria.component";
import { AuthGuardServices } from "src/services/auth-guard.service";
import { AppComponent } from "./app.component";
import { cadastroComponent } from "./cadastro/cadastro.component";
import { LoginComponent } from "./login/login.component";
import { PropriedadeComponent } from "./propriedades/propriedades.component";
import { TodoComponent } from "./todo/app.todo.component";

const rotas:Route[] = [
    {
        path: 'categoria',
        component: CategoriaComponent
    },
    {
        path: 'todo',
        component: TodoComponent,
        canActivate: [AuthGuardServices]
        
    },
    {
        path: 'propriedades',
        component: PropriedadeComponent
    },

    {
        path: 'login',
        component: LoginComponent

    },

    {
        path: 'cadastro',
        component: cadastroComponent

    },

    {
        path: '',
        redirectTo: 'cadastro',
        pathMatch: 'full'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}