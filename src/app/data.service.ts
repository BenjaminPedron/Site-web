import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ref } from './classes/ref';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "https://testsymfony.osc-fr1.scalingo.io/api/ref-prenoms";
  constructor(private _http: HttpClient) { }

  getLieux() {
    return this._http.get<Ref[]>(this.url);
  }
}
