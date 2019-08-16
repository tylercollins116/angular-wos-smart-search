import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class WosNextgenTypeaheadService {

  constructor(private httpClient: HttpClient) {
     console.log('WosNextgenTypeaheadService Constructor');
   }

  orgUrl: string =  'http://localhost:7001/suggest/tyler/'
  getOrgSuggestions(query: string): Observable<string[]> {
     return this.httpClient.get<string[]>(this.orgUrl + query);

   }
}


