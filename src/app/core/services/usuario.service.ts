import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url_base = environment.servidor; // Usar la variable de entorno adecuada
  constructor(private http:HttpClient) { }

  listarUsuarios(){
    return this.http.get(`${this.url_base}/usuario`)
  }
  guardarUsuario(datos:any){
    return this.http.post(`${this.url_base}/usuario`, datos)
  }
}
