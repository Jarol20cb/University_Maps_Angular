import { Universidad } from "./Universidad"

export class Profesor{
  idProfesor:number=0
  nombreProfesor:string=""
  apellidoPaternoProfesor:string=""
  apellidoMaternoProfesor:string=""
  calificacionProfesor:string=""
  universidad:Universidad=new Universidad();
}
