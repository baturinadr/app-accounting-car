import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {
  @Input() public displayModal = false;
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }


  public ngOnInit(): void {
    this.initializeForm();
  }

  public createOwner(): void {
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      carNumber: ['AS1233AZ', [Validators.required]],
      brand: ['Mazda', [Validators.required]],
      model: ['CX3', [Validators.required]],
      year: [2017, [Validators.required]]
    });
  }
}
