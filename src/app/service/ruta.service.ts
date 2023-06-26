import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Ruta } from '../model/Ruta';
import { Destino } from '../model/Destino';
import { RutaDestinoDTO } from '../model/RutaDestinoDTO';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  private url=`${base_url}/rutas`;
  private listCambio=new Subject<Ruta[]>();
  private confirmDelete=new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Ruta[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(ruta:Ruta){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, ruta, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva:Ruta[]){
    this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Ruta>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(ruta:Ruta){
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url+'/'+destino.id,destino);
    return this.http.put(this.url, ruta, {
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
  getDestinoMasSelec(){
    let token = sessionStorage.getItem("token");
    return this.http.get<RutaDestinoDTO[]>(`${this.url}/reporte5`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
