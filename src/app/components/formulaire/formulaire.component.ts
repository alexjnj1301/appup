import { Component } from '@angular/core'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { CarToRent, LocationCity } from "../../models/FormRequest"
import { KeyValuePipe, NgForOf } from "@angular/common"
//Import css
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, MatSelectModule, KeyValuePipe, NgForOf ]
})
export class FormulaireComponent {
  public carList = CarToRent
  public cityList = LocationCity
}
