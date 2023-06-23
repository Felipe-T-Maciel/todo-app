import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserRepository } from 'src/repositories/user.repository';
import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './todo/app.todo.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PropriedadeComponent } from './propriedades/propriedades.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardServices } from 'src/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CategoriaComponent,
    PropriedadeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserRepository,
    AuthGuardServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
