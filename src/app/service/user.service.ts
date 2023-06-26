import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { User } from '../model/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url=`${base_url}/registro`;
  private listCambio=new Subject<User[]>();
  constructor(private http:HttpClient) { }
  list(){

    return this.http.get<User[]>(this.url);
  }
  insert(user:User){

    return this.http.post(this.url, user);
  }
  setList(listaNueva:User[]){
    this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
}
