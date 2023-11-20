import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor() { }
  camposNoIguales(id_informador:string , id_asignado:string){
      return true;
  }
  validarEmpiezaMayuscula() {
    return true;
  }
}
