import { Injectable } from '@angular/core';
import { ApiService } from 'app/core/service/api.service';
import { MerchantModel } from '../models/merchanr.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'app/core/models/reponse';
import { createHttpParams } from 'app/core/functions/http-param';
import { env } from 'app/environmens/environment';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  constructor(private _apiService: ApiService,
    private _http: HttpClient) { }

  get(id: number): Observable<Response<MerchantModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.get<MerchantModel>(`/users/client-merchants/client-merchant-by`, queryParams);
  }

  delete(id: number): Observable<Response<MerchantModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.delete<MerchantModel>(`/users/client-merchants`, queryParams);;
  }

  Verified(params?): Observable<Response<MerchantModel[]>> {
    return this._apiService.get<MerchantModel[]>('/users/client-merchants/verified-client-merchants', createHttpParams(params));
  }

  unVerified(params?): Observable<Response<MerchantModel[]>> {
    return this._apiService.get<MerchantModel[]>('/users/client-merchants/unverified-client-merchants', createHttpParams(params));
  }

  rejected(params?): Observable<Response<MerchantModel[]>> {
    return this._apiService.get<MerchantModel[]>('/users/client-merchants/rejected-client-merchants', createHttpParams(params));
  }

  verify(id: number,): Observable<Response<MerchantModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.patch<MerchantModel>(`/users/client-merchants/verify-client-merchant`, {}, queryParams);
  }

  reject(id: number): Observable<Response<MerchantModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.patch<MerchantModel>(`/users/client-merchants/reject-client-merchant`, {}, queryParams);
  }

  block(id: number, body): Observable<Response<MerchantModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.patch<MerchantModel>(`/users/client-merchants/block-client-merchant`, body, queryParams);
  }

  active(id: number): Observable<Response<MerchantModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.patch<MerchantModel>(`/users/client-merchants/unblock-client-merchant`, {}, queryParams);
  }

  updateMerchant(body): Observable<Response<MerchantModel>> {
    return this._apiService.put<MerchantModel>('/users/client-merchants/update-client-merchant', body);
  }

  getMerchantTransactions(id?): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("userId", id);
    const options = { params: queryParams };
    return this._http.get(env.apiUrl + '/finance/transaction/admin-merchant-transactions', { params: queryParams });
  }

  getMerchantBalanse(id?): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("merchantId", id);
    return this._http.get(env.apiUrl + '/finance/transaction/merchant-balance', { params: queryParams });
  }

  cancelTransaction(id: number): Observable<Response<any>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._http.patch<any>(env.apiUrl + `/finance/transaction/cancel`, {}, { params: queryParams });
  }

  rejectTransaction(id: number): Observable<Response<any>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._http.patch<any>(env.apiUrl + `/finance/transaction/reject`, {}, { params: queryParams });
  }

  verifyTransaction(id: number): Observable<Response<any>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._http.patch<any>(env.apiUrl + `/finance/transaction/verify`, {}, { params: queryParams });
  }

  createTransaction(params?) {
    return this._apiService.post('/finance/transaction/add-client-merchant-balance', params);
  }

}
