import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule]
})
export class FormulaireComponent {

}
