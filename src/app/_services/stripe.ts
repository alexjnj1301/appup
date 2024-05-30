import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class StripeServices {
  private stripePromise: Promise<Stripe | null>;

  constructor(private http: HttpClient) {
    this.stripePromise = loadStripe('pk_test_51PKyLKGSWega41ZG9q0DFXHLC6AKNQW6T4V5HIq4YpDz7BzWNlz7QjADbShSnB8fcw1BsWNNScTimXLviehqG9B3000zdH2H5h'); // Initialisez Stripe avec votre clé publique
  }

  checkout(formGroup: any): Observable<any> {
    console.log(formGroup)
    return this.http.post<any>(`http://127.0.0.1:8000/api/checkout`, formGroup);
  }

  async redirectToCheckout(sessionId: string): Promise<void> {
    const stripe = await this.stripePromise;

    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionId
      });

      if (error) {
        console.error(error.message);
      }
    } else {
      console.error('Stripe.js not loaded');
    }
  }

  getSessionDetails(sessionId: string): Observable<any> {
    console.log(sessionId)
    return this.http.post<any>(`http://127.0.0.1:8000/api/details`, {sessionId});
  }
}
