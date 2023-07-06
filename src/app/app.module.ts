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
import { cadastroComponent } from './cadastro/cadastro.component';
import { HeaderComponent } from './header/header.component';
import { CookieService } from 'src/services/cookies.service';
import { LogadoComponent } from 'src/services/login.service';
import { AuthGuardServicesGuard } from 'src/services/auth-Guard/auth-guard-services.guard';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CategoriaComponent,
    PropriedadeComponent,
    LoginComponent,
    cadastroComponent,
    HeaderComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserRepository,
    AuthGuardServicesGuard,
    CookieService,
    LogadoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
