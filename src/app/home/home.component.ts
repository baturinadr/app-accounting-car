import {Component, OnInit} from '@angular/core';
import {IOwnerEntity} from "../models/owner.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public owners: IOwnerEntity[] = [
    {id: '1aw8s', name: 'Иван', patronymic: 'Иванович', surname: 'Иванов', carsCount: 1},
    {id: '1aw0s3', name: 'Наталья', patronymic: 'Игоревна', surname: 'Петрова', carsCount: 2},
    {id: '1aw4s9', name: 'Алексей', patronymic: 'Сергеевич', surname: 'Антонов', carsCount: 1}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
