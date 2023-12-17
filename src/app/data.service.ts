// data.service.ts
import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8082/';
  constructor(private http: HttpClient, public router: Router) { }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}products/`);
  }

  getProductById(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}products/`);
  }

  getFacture(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}facture/dateFacture`);
  }
  getDistincDateFacture(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}facture/dateFacture`);
  }

  getAllFacture(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}facture/dateFacture`);
  }

  getAllPayments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}payment/create`);
  }

  getClientID(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}client/id`);
  }
}
