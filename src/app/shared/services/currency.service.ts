import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "app/environmens/environment";

@Injectable({ providedIn: 'root' })

export class CurrencyService {
  constructor(private http: HttpClient) { }
  currencies
  
  getCurrencies() {
    return this.http.get(env.apiUrl + '/currency/all');
  }
}