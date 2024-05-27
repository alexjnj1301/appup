import { Routes } from '@angular/router';
import { FormulaireComponent } from './components/formulaire/formulaire.component';

export const routes: Routes = [
  { path : 'form', component : FormulaireComponent },
  { path : '', redirectTo : '/form', pathMatch : 'full' }
];
