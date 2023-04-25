import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url_base = 'http://127.0.0.1:8000/api'
  constructor(private http:HttpClient) { }

  login(datos:any){
    return this.http.post(`${this.url_base}/v1/auth/login`, datos)
  }

  registro(datos:any){
    return this.http.post(`${this.url_base}/v1/auth/registro`, datos)
  }

  perfil(datos:any){
    return this.http.post(`${this.url_base}/v1/auth/perfil`, datos)
  }

  salir(datos:any){
    return this.http.post(`${this.url_base}/v1/auth/salir`, datos)
  }
}
