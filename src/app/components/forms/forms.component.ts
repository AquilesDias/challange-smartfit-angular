import { SmartUnitService } from '../../service/smart-unit.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  results = [];
  formGroup!:FormGroup;

  constructor( private formBuilder : FormBuilder, private service: SmartUnitService){}

  ngOnInit(): void {
    this.service.findUnits().subscribe(data => console.log(data));
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    });
  }

  onSubmit(): void {
    console.log(this.formGroup.value);
  }
  onClean(): void {
    this.formGroup.reset();
  }

}
