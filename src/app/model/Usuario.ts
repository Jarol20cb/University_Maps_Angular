import { Universidad } from "./Universidad"

export class Usuario{
  idUsuario:number=0
  nombreUsuario:String=""
  apellidoPaternoUsuario:string=""
  apellidoMaternoUsuario:string=""
  fechaNacimientoUsuario:Date=new Date(Date.now())
  telefonoUsuario:String=""
  correoUsuario:String=""
  universidad:Universidad=new Universidad()
}
