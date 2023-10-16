import { SmartUnitService } from '../../service/smart-unit.service';
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
        private service: SmartUnitService
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
    if(!this.formGroup.value.showClosed){
      this.resultsFiltered = this.results.filter(location => location.opened === true);
    } else {
      this.resultsFiltered = this.results;
    }
  }
  onClean(): void {
    this.formGroup.reset();
  }

}
