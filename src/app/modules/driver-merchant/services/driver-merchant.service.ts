import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createHttpParams } from 'app/core/functions/http-param';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { DriverMerchantModel } from '../models/driver-merchant.model';
import { env } from 'app/environmens/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverMerchantService {
  constructor(private _apiService: ApiService, private _http: HttpClient) { }

  get(id: number): Observable<Response<DriverMerchantModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.get<DriverMerchantModel>(`/users/driver-merchants`, queryParams);
  }

  delete(id: number): Observable<Response<DriverMerchantModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.delete<DriverMerchantModel>(`/users/driver-merchants`, queryParams);;
  }

  Verified(params?): Observable<Response<DriverMerchantModel[]>> {
    return this._apiService.get<DriverMerchantModel[]>('/users/driver-merchants/verified-driver-merchants', createHttpParams(params));
  }

  unVerified(params?): Observable<Response<DriverMerchantModel[]>> {
    return this._apiService.get<DriverMerchantModel[]>('/users/driver-merchants/unverified-driver-merchants', createHttpParams(params));
  }

  rejected(params?): Observable<Response<DriverMerchantModel[]>> {
    return this._apiService.get<DriverMerchantModel[]>('/users/driver-merchants/rejected-driver-merchants', createHttpParams(params));
  }

  verify(id: number,): Observable<Response<DriverMerchantModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.patch<DriverMerchantModel>(`/users/driver-merchants/verify-driver-merchant`, {}, queryParams);
  }

  reject(id: number): Observable<Response<DriverMerchantModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.patch<DriverMerchantModel>(`/users/driver-merchants/reject-driver-merchant`, {}, queryParams);
  }

  block(id: number, body): Observable<Response<DriverMerchantModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.patch<DriverMerchantModel>(`/users/driver-merchants/block-driver-merchant`, body, queryParams);
  }

  active(id: number): Observable<Response<DriverMerchantModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.patch<DriverMerchantModel>(`/users/driver-merchants/unblock-driver-merchant`, {}, queryParams);
  }

  updateMerchant(body): Observable<Response<DriverMerchantModel>> {
    return this._apiService.put<DriverMerchantModel>('/users/driver-merchant/register', body);
  }

  getMerchantTransactions(id?): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("userId", id);
    const options = { params: queryParams };
    return this._http.get(env.merchantUrl + '/finance/transaction/admin-merchant-transactions', { params: queryParams });
  }

  getMerchantBalanse(id?): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("merchantId", id);
    return this._http.get(env.merchantUrl + '/finance/transaction/merchant-balance', { params: queryParams });
  }

  cancelTransaction(id: number): Observable<Response<any>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._http.patch<any>(env.merchantUrl + `/finance/transaction/cancel`, {}, { params: queryParams });
  }

  rejectTransaction(id: number): Observable<Response<any>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._http.patch<any>(env.merchantUrl + `/finance/transaction/reject`, {}, { params: queryParams });
  }

  verifyTransaction(id: number): Observable<Response<any>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._http.patch<any>(env.merchantUrl + `/finance/transaction/verify`, {}, { params: queryParams });
  }

}
