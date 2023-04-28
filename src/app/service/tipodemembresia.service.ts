import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { TipoDeMembresia } from '../model/TipoDeMembresia';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<TipoDeMembresia[]>(this.url);
  }
  insert(tipodemembresia:TipoDeMembresia){
    return this.http.post(this.url, tipodemembresia);
  }
  setList(listaNueva:TipoDeMembresia[]){
    this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<TipoDeMembresia>(`${this.url}/${id}`);
  }
  update(membresia:TipoDeMembresia){
    return this.http.put(this.url+'/'+membresia.id,membresia);
  }
  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmDelete(){
    return this.confirmDelete.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmDelete.next(estado);
  }
}
