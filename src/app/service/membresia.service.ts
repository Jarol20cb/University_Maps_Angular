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
  private confirmaEliminacion = new Subject<boolean>()

  constructor(private http: HttpClient) { }

  
  list() {
    return this.http.get<Membresia[]>(this.url);
  }
  insert(membresia:Membresia)
  {
    return this.http.post(this.url, membresia);

  }
  setList(listaNueva: Membresia[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(membresia: Membresia) {
    return this.http.put(this.url + "/" + membresia.id, membresia);
  }
  listId(id:number)
{
  return this.http.get<Membresia>(`${this.url}/${id}`);
}

eliminar(id: number) {
  return this.http.delete(`${this.url}/${id}`);
}

update(membresia:Membresia)
{
  return this.http.put(this.url+"/"+membresia.id, membresia);
}
  
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: boolean) {
    this.confirmaEliminacion.next(estado);
  }

}

