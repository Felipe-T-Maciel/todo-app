import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CategoriaComponent } from "src/app/categoria/categoria.component";
import { AppComponent } from "./app.component";
import { PropriedadeComponent } from "./propriedades/propriedades.component";
import { TodoComponent } from "./todo/app.todo.component";

const rotas:Route[] = [
    {
        path: 'categoria',
        component: CategoriaComponent
    },
    {
        path: 'todo',
        component: TodoComponent
        
    },
    {
        path: 'propriedades',
        component: PropriedadeComponent
    },
    {
        path: '',
        redirectTo: 'todo',
        pathMatch: 'full'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}