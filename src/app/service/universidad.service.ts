import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Universidad } from '../model/Universidad';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { reporte3 } from '../model/reporte3';

const base_url=environment.base;

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {
  private url=`${base_url}/universidades`;
  private listCambio=new Subject<Universidad[]>();
  private confirmDelete=new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Universidad[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(universidad:Universidad){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, universidad, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva:Universidad[]){
    this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Universidad>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(universidad:Universidad){
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url+'/'+universidad.id,universidad);
    return this.http.put(this.url, universidad, {
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
  getUniversityLima(){
    let token = sessionStorage.getItem("token");
    return this.http.get<reporte3[]>(`${this.url}/reporte3`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
