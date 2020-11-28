import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class apiService {

    constructor(private http: HttpClient) {

    }

    getRefs() : Observable<any> {
        const headers= new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        return this.http.get("https://testsymfony.osc-fr1.scalingo.io/api/ref-prenoms", {headers: headers});
    }

}