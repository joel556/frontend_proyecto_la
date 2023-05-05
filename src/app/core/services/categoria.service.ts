import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url_base = environment.servidor
  constructor (private http:HttpClient) { }

  listarCategorias (){
  return this.http.get(`${this.url_base}/categoria`)
  }

  guardarCategorias (datos:any){
    return this.http.post(`${this.url_base}/categoria`, datos)
  }
  mostrarCategorias (id:any){
    return this.http.get(`${this.url_base}/categoria/${id}`)
  }
  modificarCategorias (id:any, datos:any){
    return this.http.put(`${this.url_base}/categoria/${id}`,datos)
  }

  eliminarCategorias (id:any){
  return this.http.delete(`${this.url_base}/categoria/${id}`)
}
}
