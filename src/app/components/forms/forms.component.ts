import { FilterUnitsService } from './../../services/filter-units.service';
import { SmartUnitService } from '../../services/smart-unit.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() submitEvent = new EventEmitter();
 

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
      this.results = data;
      this.resultsFiltered = data;
    });
  }

  onSubmit(): void {
    let {showClosed, hour} = this.formGroup.value
    this.resultsFiltered = this.filterUnitsService.filter(this.results, showClosed, hour);
    this.service.setFilteredUnits(this.resultsFiltered);

    this.submitEvent.emit();
  }
    
  onClean(): void {
    this.formGroup.reset();
  }

}
