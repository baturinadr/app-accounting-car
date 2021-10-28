import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from "primeng/button";
import {OwnerDetailsRoutingModule} from './owner-details-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {ReactiveFormsModule} from "@angular/forms";

import {OwnerDetailsComponent} from './owner-details.component';
import {CreateCarComponent} from './create-owner/create-car.component';


@NgModule({
  declarations: [
    OwnerDetailsComponent,
    CreateCarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OwnerDetailsRoutingModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    DialogModule
  ]
})
export class OwnerDetailsModule {
}
