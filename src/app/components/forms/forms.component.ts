import { FilterUnitsService } from './../../services/filter-units.service';
import { SmartUnitService } from '../../services/smart-unit.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from 'src/app/type/location.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  results: Location[] = [];
  resultsFiltered: Location[] = [];
  formGroup!:FormGroup;
 

  constructor( 
        private formBuilder : FormBuilder, 
        private service: SmartUnitService,
        private filterUnitsService :FilterUnitsService
      ){}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    });

    this.service.findUnits().subscribe(data => {
      this.results = data.locations;
      this.resultsFiltered = data.locations;
    });
  }

  onSubmit(): void {
    let {showClosed, hour} = this.formGroup.value
    this.resultsFiltered = this.filterUnitsService.filter(this.results, showClosed, hour);
  }
    
  onClean(): void {
    this.formGroup.reset();
  }

}
