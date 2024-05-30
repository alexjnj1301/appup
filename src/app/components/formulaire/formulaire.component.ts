import { Component } from '@angular/core'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { CarToRent, LocationCity } from "../../models/FormRequest"
import { KeyValuePipe, NgForOf } from "@angular/common"
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms"
import { MatButton } from "@angular/material/button"
import { StripeServices } from '../../_services/stripe';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, MatSelectModule, KeyValuePipe, NgForOf, FormsModule, MatButton, HttpClientModule, ReactiveFormsModule ]
})
export class FormulaireComponent {
  public carList = CarToRent
  public cityList = LocationCity
  public formGroup: FormGroup

  public constructor(private stripeServices: StripeServices, public formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      age: [0, Validators.required],
      carToRent: [CarToRent.ASTON_MARTIN, Validators.required],
      locationCity: [LocationCity.PARIS, Validators.required],
      token: ['', Validators.required],
    });
  }

  public sendForm(): void {
    this.stripeServices.checkout(this.formGroup.value).subscribe(response => {
      if (response.sessionId) {
        this.stripeServices.redirectToCheckout(response.sessionId);
        console.log(response)
      } else {
        console.error('No session ID returned');
      }
    });
  }
}
