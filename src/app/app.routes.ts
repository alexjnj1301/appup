import { Routes } from '@angular/router';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { SuccessComponent } from './components/success/success.component';

export const routes: Routes = [
  { path : 'success', component : SuccessComponent },
  { path : 'form', component : FormulaireComponent },
  { path : '', redirectTo : '/form', pathMatch : 'full' }
];
