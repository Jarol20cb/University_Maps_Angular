import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { UbicacionFavorita } from '../model/UbicacionFavorita';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class UbicacionfavoritaService {
  private url=`${base_url}/ubicacionesfavoritas`;
  private listCambio=new Subject<UbicacionFavorita[]>();
  private confirmDelete=new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<UbicacionFavorita[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(ubicacionfavorita:UbicacionFavorita){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, ubicacionfavorita, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva:UbicacionFavorita[]){
    this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<UbicacionFavorita>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(ubicacionfavorita:UbicacionFavorita){
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url+'/'+destino.id,destino);
    return this.http.put(this.url, ubicacionfavorita, {
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
