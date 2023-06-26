import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { TipoDeMembresia } from '../model/TipoDeMembresia';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const base_url=environment.base;

@Injectable({
  providedIn: 'root'
})
export class TipodemembresiaService {
  private url=`${base_url}/membresias`;
  private listCambio=new Subject<TipoDeMembresia[]>();
  private confirmDelete=new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<TipoDeMembresia[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(tipodemembresia:TipoDeMembresia){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, tipodemembresia, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva:TipoDeMembresia[]){
    this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<TipoDeMembresia>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(membresia:TipoDeMembresia){
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url+'/'+membresia.id,membresia);
    return this.http.put(this.url, membresia, {
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
}
