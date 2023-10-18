import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SmartfitUnit } from '../type/smartfit-units-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SmartUnitService {

  apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

  constructor(private httpClient : HttpClient) { }

  findUnits():Observable<SmartfitUnit>{
    return this.httpClient.get<SmartfitUnit>(this.apiUrl);
  }
}
