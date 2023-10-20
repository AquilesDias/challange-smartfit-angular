import { Component, Input, OnInit } from '@angular/core';
import { SmartUnitService } from 'src/app/services/smart-unit.service';
import { Location } from 'src/app/type/location.interface';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  @Input() unitsList : Location[] = []

  constructor(){}

  ngOnInit(): void {
    console.log(this.unitsList);
    
  }

}
