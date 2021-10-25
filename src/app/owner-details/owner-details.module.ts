import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from "primeng/button";
import {OwnerDetailsRoutingModule} from './owner-details-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from "primeng/table";

import {OwnerDetailsComponent} from './owner-details.component';


@NgModule({
  declarations: [
    OwnerDetailsComponent
  ],
  imports: [
    CommonModule,
    OwnerDetailsRoutingModule,
    ButtonModule,
    InputTextModule,
    TableModule
  ]
})
export class OwnerDetailsModule {
}
