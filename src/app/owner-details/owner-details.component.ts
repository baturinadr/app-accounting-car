import {Component, ViewChild} from '@angular/core';

import {ICarEntity} from "../models/car.model";
import {CreateCarComponent} from "./create-owner/create-car.component";

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.scss']
})
export class OwnerDetailsComponent {
  @ViewChild(CreateCarComponent) public createOwner: CreateCarComponent;
  public carsDetails: ICarEntity[] = [
    {carNumber: 'AX2121HP', brand: 'Hyundai', model: 'Accent', year: 2009},
    {carNumber: 'AX2121HP', brand: 'Hyundai', model: 'Accent', year: 2009},
    {carNumber: 'AX2121HP', brand: 'Hyundai', model: 'Accent', year: 2009}
  ]

  public onAdd(): void {
    this.createOwner.showCreateForm();
  }
}
