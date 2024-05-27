import { Component } from '@angular/core'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { CarToRent, LocationCity } from "../../models/FormRequest"
import { KeyValuePipe, NgForOf } from "@angular/common"
import { FormBuilder, FormGroup, FormsModule, Validators } from "@angular/forms"
import { MatButton } from "@angular/material/button"

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, MatSelectModule, KeyValuePipe, NgForOf, FormsModule, MatButton ]
})
export class FormulaireComponent {
  public carList = CarToRent
  public cityList = LocationCity
  public formGroup: FormGroup

  public constructor(public formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      age: [0, Validators.required],
      locationCity: [LocationCity.PARIS, Validators.required],
      carToRent: [CarToRent.ASTON_MARTIN, Validators.required],
      token: ['', Validators.required]
    })
  }

  public sendForm(): void {
    console.log(this.formGroup.value)
  }
}
