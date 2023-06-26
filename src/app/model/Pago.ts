import { Usuario } from './Usuario';
import { TipoDeMembresia } from "./TipoDeMembresia"

export class Pago{
  idPago:number=0
  descripcionPago:String=""
  montoPago:number=0
  metodoPago:String=""
  tipodemembresia:TipoDeMembresia=new TipoDeMembresia();
  usuario:Usuario=new Usuario();
}
