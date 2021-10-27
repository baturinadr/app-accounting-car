import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

import {IOwnerEntity} from "../models/owner.model";
import {CarOwnersService} from "../services/car-owners.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public selectCar: null | IOwnerEntity;
  public owners: IOwnerEntity[] = [];
  private destroy$: Subject<void | null> = new Subject<void | null>();

  constructor(private carOwnersService: CarOwnersService) {
  }

  public ngOnInit(): void {
    this.getList();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  private getList(): void {
    this.carOwnersService.getOwners()
      .pipe(takeUntil(this.destroy$))
      .subscribe((owners: IOwnerEntity[]) => {
        this.owners = owners;
      });
  }
}
