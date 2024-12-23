import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { ClientModel } from '../models/client.model';
import { createHttpParams } from 'app/core/functions/http-param';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<ClientModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.get<ClientModel>(`/users/clients/client-by`, queryParams);
  }

  getAll(params?): Observable<Response<ClientModel[]>> {
    return this._apiService.get<ClientModel[]>('/users/clients/all-clients', createHttpParams(params));
  }

  getNonActive(params?): Observable<Response<ClientModel[]>> {
    return this._apiService.get<ClientModel[]>('/users/clients/non-active-clients', createHttpParams(params));
  }

  getActive(params?): Observable<Response<ClientModel[]>> {
    return this._apiService.get<ClientModel[]>('/users/clients/active-clients', createHttpParams(params));
  }

  create(body): Observable<Response<ClientModel>> {
    return this._apiService.post<ClientModel>('/users/clients/register', body)
  }

  update(body): Observable<Response<ClientModel>> {
    return this._apiService.put<ClientModel>('/users/clients', body);
  }

  block(id: number,body): Observable<Response<ClientModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.patch<ClientModel>(`/users/clients/block-client`, body, queryParams);
  }

  active(id:number): Observable<Response<ClientModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.patch<ClientModel>(`/users/clients/unblock-client`, {}, queryParams);
  }

  delete(id: number): Observable<Response<ClientModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.delete<ClientModel>(`/users/clients/`, queryParams);;
  }
}
