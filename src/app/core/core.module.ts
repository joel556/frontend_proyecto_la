import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptor/auth.interceptor';
import { UsuarioService } from './services/usuario.service';
import { CategoriaService } from './services/categoria.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UsuarioService,
    CategoriaService
  ]
})
export class CoreModule { }
