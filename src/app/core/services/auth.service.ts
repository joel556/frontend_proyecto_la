import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url_base = environment.servidor; // Usar la variable de entorno adecuada
  constructor(private http:HttpClient) { }

  login(datos:any){
    return this.http.post(`${this.url_base}/v1/auth/login`, datos)
  }

  registro(datos:any){
    return this.http.post(`${this.url_base}/v1/auth/registro`, datos)
  }

  perfil(){
    //return this.http.get(`${this.url_base}/v1/auth/perfil`, {headers: {Authorization: 'Bearer 18|S3GOwyyVZbGBeEUIuVBukWQbrdSrZyz53LFp3u8h'}})
    return this.http.get(`${this.url_base}/v1/auth/perfil`)
  }

  salir(datos:any){
    return this.http.post(`${this.url_base}/v1/auth/salir`, datos)
  }
}
