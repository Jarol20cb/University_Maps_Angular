import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Pago } from '../model/Pago';
import { PagoMembresiaDTO } from '../model/PagoMembresiaDTO';
import { reporte7 } from '../model/reporte7';
import { reporte9 } from '../model/reporte9';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private url=`${base_url}/pagos`;
  private listCambio=new Subject<Pago[]>();
  private confirmDelete=new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Pago[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(pago:Pago){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, pago, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva:Pago[]){
    this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Pago>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(pago:Pago){
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url+'/'+destino.id,destino);
    return this.http.put(this.url, pago, {
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
  getCantUsuarioXMmebresia(){
    let token = sessionStorage.getItem("token");
    return this.http.get<PagoMembresiaDTO[]>(`${this.url}/reporte4`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getSumaMontoXMetodo(){
    let token = sessionStorage.getItem("token");
    return this.http.get<reporte7[]>(`${this.url}/reporte7`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getSumaMontoXMembresia():Observable<reporte9[]>{
    let token = sessionStorage.getItem("token");
    return this.http.get<reporte9[]>(`${this.url}/reporte9`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
