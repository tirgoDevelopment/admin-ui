import { Injectable } from '@angular/core';
import { createHttpParams } from 'app/core/functions/http-param';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { SecureTransactionModel } from '../models/secure-transaction.model';

@Injectable({
  providedIn: 'root'
})
export class SecureTransactionService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<SecureTransactionModel>> {
    return this._apiService.get<SecureTransactionModel>(`/secure-transactions/${id}`);
  }

  getAll(params?): Observable<Response<SecureTransactionModel[]>> {
    return this._apiService.get<SecureTransactionModel[]>('/secure-transactions/all', createHttpParams(params));
  }

  create(body): Observable<Response<SecureTransactionModel>> {
		return this._apiService.post<SecureTransactionModel>('/secure-transactions', body);
	}

  update(body): Observable<Response<SecureTransactionModel>> {
    return this._apiService.put<SecureTransactionModel>('/secure-transactions', body);
  }

  delete(id: number): Observable<Response<SecureTransactionModel>> {
    return this._apiService.delete<SecureTransactionModel>(`/secure-transactions/${id}`);;
  }
}
