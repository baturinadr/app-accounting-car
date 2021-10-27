import {Injectable} from "@angular/core";
import {InMemoryDbService} from "angular-in-memory-web-api";

import {IOwnerEntity} from "./models/owner.model";


Injectable()
export class InMemoryDataService implements InMemoryDbService {
  public createDb(): { [key: string]: IOwnerEntity[] } {
    const owners: IOwnerEntity[] = [
      {name: 'Иван', patronymic: 'Иванович', surname: 'Иванов', carsCount: 1},
      {name: 'Наталья', patronymic: 'Игоревна', surname: 'Петрова', carsCount: 2},
      {name: 'Алексей', patronymic: 'Сергеевич', surname: 'Антонов', carsCount: 1}
    ];
    return {owners: owners};
  }
}
