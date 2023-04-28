import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Destino } from '../model/Destino';
import { HttpClient } from '@angular/common/http';

const base_url=environment.base;

@Injectable({
  providedIn: 'root'
})
export class DestinoService {
  private url=`${base_url}/destinos`;
  private listCambio=new Subject<Destino[]>();
  private confirmDelete=new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Destino[]>(this.url);
  }
  insert(destino:Destino){
    return this.http.post(this.url, destino);
  }
  setList(listaNueva:Destino[]){
    this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<Destino>(`${this.url}/${id}`);
  }
  update(destino:Destino){
    return this.http.put(this.url+'/'+destino.id,destino);
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
