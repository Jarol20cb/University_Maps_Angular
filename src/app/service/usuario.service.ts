import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Usuario } from '../model/Usuario';
import { Observable, Subject } from 'rxjs';
import { UsuarioUniversidadDTO } from '../model/UsuarioUniversidadDTO';
import { reporte6 } from '../model/reporte6';
import { reporte7 } from '../model/reporte7';
import { reporte8 } from '../model/reporte8';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url=`${base_url}/usuarios`;
  private listCambio=new Subject<Usuario[]>();
  private confirmDelete=new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Usuario[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(usuario:Usuario){
    let token = sessionStorage.getItem("token");
    console.log(usuario.universidad.idUniversidad);
    return this.http.post(this.url, usuario, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva:Usuario[]){
    this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Usuario>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(usuario:Usuario){
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url+'/'+destino.id,destino);
    return this.http.put(this.url, usuario, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  delete(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getConfirmDelete(){
    return this.confirmDelete.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmDelete.next(estado);
  }
  getNameByUniversity():Observable<UsuarioUniversidadDTO[]>{
    let token = sessionStorage.getItem("token");
    return this.http.get<UsuarioUniversidadDTO[]>(`${this.url}/nombres`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getUsuariosByUni():Observable<reporte6[]>{
    let token = sessionStorage.getItem("token");
    return this.http.get<reporte6[]>(`${this.url}/reporte6`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getNameUsuUbiFav():Observable<reporte8[]>{
    let token = sessionStorage.getItem("token");
    return this.http.get<reporte8[]>(`${this.url}/reporte8`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
