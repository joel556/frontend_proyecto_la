import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  
  usuarios: any = [];

  constructor(private usuarioService:UsuarioService){ }

  ngOnInit(): void{
    this.usuarioService.listarUsuarios().subscribe(
      (res: any) => {
        this.usuarios = res
      }
    )

  }

}
