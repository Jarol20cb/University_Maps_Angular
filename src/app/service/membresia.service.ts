import { Injectable } from '@angular/core';
import { Membresia } from '../model/membresia';
import { HttpClient } from '@angular/common/http'; //agregado
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const base_url = environment.host
@Injectable({
  providedIn: 'root'
})
export class MembresiaService {

  private url = `${base_url}/membresias`
  private listaCambio = new Subject<Membresia[]>()

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Membresia[]>(this.url);
  }
  setList(listaNueva: Membresia[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  listarId(id: number) {
    return this.http.get<Membresia>(`${this.url}/${id}`);
  }

}

