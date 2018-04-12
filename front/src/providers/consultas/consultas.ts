import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http'
import { Content } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/*
  Generated class for the ConsultasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsultasProvider {

  constructor(public http: Http, public http1: HttpClient) {
    console.log('Hello ConsultasProvider Provider');
  }

  // holis (){
  //   return new Promise( (resolve, reject) => {
  //     //let headers = new Headers();
  //     //headers.append("Content-Type","application/json");
  //     this.http1.get("https://jsonplaceholder.typicode.com/users")
  //       .map( res => res)
  //       .subscribe((res:any) => {
  //       //let response = res.json();
  //       console.log(res);
  //       resolve(res);
  //     });
  //   })
  // }

  nuevoMarengo (parametros){
    return new Promise( (resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type","application/json");
      this.http.post(`http://192.168.0.24:3000/api/nuevoMarengo`, JSON.stringify(parametros),{ headers: headers})
        .map( res => res.json())
        .subscribe((res) => {
        console.log(res);
        resolve(res);
      });
    });
  }
}
