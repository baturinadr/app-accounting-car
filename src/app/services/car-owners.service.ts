import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IOwnerEntity} from "../models/owner.model";
import {environment} from "../../environments/environment";
import {mergeMap} from "rxjs/operators";


@Injectable()
export class CarOwnersService {
  constructor(private http: HttpClient) {
  }

  public getOwners(): Observable<IOwnerEntity[]> {
    return this.http.get<IOwnerEntity[]>(environment.baseUrl);
  }

  public getOwnerById(id: number): Observable<IOwnerEntity> {
    return this.http.get<IOwnerEntity>(`${environment.baseUrl}/${id}}`);
  }

  public deleteOwner(ownerId: number): Observable<IOwnerEntity[]> {
    return this.http
      .delete(`${environment.baseUrl}/${ownerId}`)
      .pipe(mergeMap(() => this.getOwners()))
  }
}
