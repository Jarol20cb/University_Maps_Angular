import { Ubicacion } from "./Ubicacion"
import { Usuario } from "./Usuario";

export class UbicacionFavorita{
  idUbicacionFavorita:number=0
  descripcionUbicacionFavorita:string=""
  ubicacion:Ubicacion=new Ubicacion();
  usuario:Usuario=new Usuario()
}
