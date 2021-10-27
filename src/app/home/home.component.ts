import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Router} from "@angular/router";

import {IOwnerEntity} from "../models/owner.model";
import {CarOwnersService} from "../services/car-owners.service";
import {OwnerDetailsModeEnum} from "../models/owner-details-mode.enum";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public ownerDetailsModeEnum = OwnerDetailsModeEnum;
  public selectCar: null | IOwnerEntity;
  public owners: IOwnerEntity[] = [];
  private destroy$: Subject<void | null> = new Subject<void | null>();

  constructor(private carOwnersService: CarOwnersService,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.getList();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  public redirect(event: MouseEvent, mode: OwnerDetailsModeEnum): void {
    event.preventDefault();
    if (mode === OwnerDetailsModeEnum.create) {
      this.router.navigate(['/owner', 'create']);
      return;
    }
    if (!this.selectCar) return;
    this.router.navigate(['/owner', this.selectCar.id], {
      queryParams: {
        mode: mode
      }
    });
  }

  public delete(): void {
    if (!this.selectCar || !this.selectCar.id) return;
    this.carOwnersService.deleteOwner(this.selectCar.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((owners: IOwnerEntity[]) => {
        this.selectCar = null;
        this.owners = owners;
      })
  }

  private getList(): void {
    this.carOwnersService.getOwners()
      .pipe(takeUntil(this.destroy$))
      .subscribe((owners: IOwnerEntity[]) => {
        this.owners = owners;
      });
  }
}
