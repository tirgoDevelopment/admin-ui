import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { CurrencyModel } from '../models/currency.model';
import { createHttpParams } from 'app/core/functions/http-param';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<CurrencyModel>> {
    return this._apiService.get<CurrencyModel>(`/currencies/${id}`);
  }

  getAll(params?): Observable<Response<CurrencyModel[]>> {
    return this._apiService.get<CurrencyModel[]>('/currencies/all', createHttpParams(params));
  }

  create(body): Observable<Response<CurrencyModel>> {
		return this._apiService.post<CurrencyModel>('/currencies', body);
	}

  update(body): Observable<Response<CurrencyModel>> {
    return this._apiService.put<CurrencyModel>('/currencies', body);
  }

  delete(id: number): Observable<Response<CurrencyModel>> {
    return this._apiService.delete<CurrencyModel>(`/currencies/${id}`);;
  }
}
