import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  constructor(private http: HttpClient) {}

  checkout(formGroup: any): Observable<any> {
    console.log(formGroup)
    return this.http.post<any>(`http://127.0.0.1:8000/checkout`, formGroup);
  }
}
