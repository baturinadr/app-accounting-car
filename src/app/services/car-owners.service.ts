import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IOwnerEntity} from "../models/owner.model";
import {environment} from "../../environments/environment";


@Injectable()
export class CarOwnersService {
  constructor(private http: HttpClient) {
  }

  public getOwners(): Observable<IOwnerEntity[]> {
    return this.http.get<IOwnerEntity[]>(environment.baseUrl);
  }
}
