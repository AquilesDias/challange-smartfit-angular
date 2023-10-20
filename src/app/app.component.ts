import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from './type/location.interface';
import { FilterUnitsService } from './services/filter-units.service';
import { SmartUnitService } from './services/smart-unit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showList = new BehaviorSubject(false);
  unitsList : Location []= [];

  constructor(private service: SmartUnitService){}

  onSubmit(){
    this.unitsList = this.service.findFilteredUnits();
    this.showList.next(true);

  }
}
