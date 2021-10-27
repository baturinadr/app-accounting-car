import {Component} from '@angular/core';
import {ICarEntity} from "../models/car.model";

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.scss']
})
export class OwnerDetailsComponent {
  public carsDetails: ICarEntity[] = [
    {carNumber: 'AX2121HP', brand: 'Hyundai', model: 'Accent', year: 2009},
    {carNumber: 'AX2121HP', brand: 'Hyundai', model: 'Accent', year: 2009},
    {carNumber: 'AX2121HP', brand: 'Hyundai', model: 'Accent', year: 2009}
  ]
}
