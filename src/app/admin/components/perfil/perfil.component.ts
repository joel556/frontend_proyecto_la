import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent  implements OnInit{

  perfil: any

  constructor(private authService: AuthService){}

  ngOnInit(): void {

    this.authService.perfil().subscribe(
      (res) => {
        this.perfil = res
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
