import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Sugerencia } from '../model/Sugerencia';

const base_url=environment.base;

@Injectable({
  providedIn: 'root'
})
export class SugerenciaService {
  private url=`${base_url}/sugerencias`;
  private listCambio=new Subject<Sugerencia[]>();
  private confirmDelete=new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Sugerencia[]>(this.url);
  }
  insert(sugerencia:Sugerencia){
    return this.http.post(this.url, sugerencia);
  }
  setList(listaNueva:Sugerencia[]){
    this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<Sugerencia>(`${this.url}/${id}`);
  }
  update(sugerencia:Sugerencia){
    return this.http.put(this.url+'/'+sugerencia.id,sugerencia);
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
