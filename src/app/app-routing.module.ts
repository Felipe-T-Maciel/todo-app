import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CategoriaComponent } from "src/app/categoria/categoria.component";
import { AuthGuardServicesGuard } from "src/services/auth-Guard/auth-guard-services.guard";
import { AppComponent } from "./app.component";
import { cadastroComponent } from "./cadastro/cadastro.component";
import { LoginComponent } from "./login/login.component";
import { PropriedadeComponent } from "./propriedades/propriedades.component";
import { TodoComponent } from "./todo/app.todo.component";

const rotas:Route[] = [
    {
        path: 'categoria',
        component: CategoriaComponent,
        canActivate: [AuthGuardServicesGuard]
    },
    {
        path: 'todo',
        component: TodoComponent,
        canActivate: [AuthGuardServicesGuard]
        
    },
    {
        path: 'propriedades',
        component: PropriedadeComponent,
        canActivate: [AuthGuardServicesGuard]
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