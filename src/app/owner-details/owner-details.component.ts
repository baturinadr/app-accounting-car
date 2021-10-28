import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {takeUntil} from "rxjs/operators";

import {ICarEntity} from "../models/car.model";
import {IOwnerEntity} from "../models/owner.model";
import {CarOwnersService} from "../services/car-owners.service";

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.scss']
})
export class OwnerDetailsComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public isAddCarModalVisible = false;
  public carsDetails: ICarEntity[] = [
    {carNumber: 'AX2121HP', brand: 'Hyundai', model: 'Accent', year: 2009},
    {carNumber: 'AX2121HP', brand: 'Hyundai', model: 'Accent', year: 2009},
    {carNumber: 'AX2121HP', brand: 'Hyundai', model: 'Accent', year: 2009}
  ]
  private destroy$: Subject<void | null> = new Subject<void | null>()

  constructor(private route: ActivatedRoute,
              private carOwnersService: CarOwnersService) {
  }

  public ngOnInit(): void {
    this.initializeForm();
    this.getOwner();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  public initializeForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      patronymic: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required])
    });
  }

  public getOwner(): void {
    const id = this.route.snapshot.params?.id;

    if (!id) return;

    this.carOwnersService.getOwnerById(id)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((owner: IOwnerEntity) => {
        const {name, surname, patronymic} = owner
        this.form.setValue({name, patronymic, surname})
      });
  }

  public onAdd(): void {
    this.isAddCarModalVisible = true;
  }
}
