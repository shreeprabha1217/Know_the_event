import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberData } from './number.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl = "https://numbersapi.p.rapidapi.com";
  XRapidAPIHostHeaderName = 'X-RapidAPI-Host';
  XRapidAPIHeaderValue = 'numbersapi.p.rapidapi.com';
  XRapidAPIKeyName = 'X-RapidAPI-Key';
  XRapidAPIKeyValue = '7bf3e2d9b8msh07970085fd596c4p1bc6efjsnd51509319cfb';

  constructor(private http: HttpClient) {}

  getNumberData(month: string, date: string): Observable<NumberData> {
    const headers = new HttpHeaders()
      .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHeaderValue)
      .set(this.XRapidAPIKeyName, this.XRapidAPIKeyValue);

    const url = `${this.baseUrl}/${month}/${date}/date?fragment=true&json=true`;

    return this.http.get<NumberData>(url, { headers });
  }
}
