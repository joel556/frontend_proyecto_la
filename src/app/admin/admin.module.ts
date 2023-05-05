import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './components/usuario/usuario.component';
import {TableModule} from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    PerfilComponent,
    CategoriaComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    HttpClientModule,
    TableModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
  ]
})
export class AdminModule { }
