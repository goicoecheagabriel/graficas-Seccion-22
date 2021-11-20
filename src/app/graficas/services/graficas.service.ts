import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  getUsuariosRedesSociales(){
    return this.http.get('http://192.168.0.22:3000/grafica')
  }

  getUsuariosRedesSocialesDonaData(){
    return this.getUsuariosRedesSociales()
      .pipe(
        delay( 300 ),
        map( data => {
          const labels = Object.keys(data);
          const values = Object.values(data);
          return {labels, values};
        } )
      )
  }
}
