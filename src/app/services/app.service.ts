import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) { }

  public getSecurityCode(): Observable<string> {
    return this.http.get<string>(`https://api.appup.fr/Project/1/getSecurityCode`);
  }
}
