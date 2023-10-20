import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { SmartfitUnit } from '../type/smartfit-units-response.interface';
import { Location } from '../type/location.interface';

@Injectable({
  providedIn: 'root'
})
export class SmartUnitService {

  private allUnitsSubject : BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>([]);
  private findAllUnits$   : Observable<Location[]> = this.allUnitsSubject.asObservable();
  private filteredUnits   : Location[] = []; 

  apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

  constructor(private httpClient : HttpClient) {

    this.httpClient.get<SmartfitUnit>(this.apiUrl).subscribe(data => {
      this.allUnitsSubject.next(data.locations);
      this.filteredUnits = data.locations;
    })
  }

  findUnits():Observable<Location[]>{
    return this.findAllUnits$;
  }

  findFilteredUnits(){
    return this.filteredUnits;
  }

  setFilteredUnits(value: Location[]){
    this.filteredUnits = value; 
  }
}
