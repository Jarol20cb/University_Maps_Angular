import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Universidad } from '../model/Universidad';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<Universidad[]>(this.url);
  }
  insert(universidad:Universidad){
    return this.http.post(this.url, universidad);
  }
  setList(listaNueva:Universidad[]){
    this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<Universidad>(`${this.url}/${id}`);
  }
  update(universidad:Universidad){
    return this.http.put(this.url+'/'+universidad.id,universidad);
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
