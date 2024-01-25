import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { ClientModel } from '../models/client.model';
import { createHttpParams } from 'app/core/functions/http-param';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<ClientModel>> {
    return this._apiService.get<ClientModel>(`/clients/${id}`);
  }

  getAll(params?): Observable<Response<ClientModel[]>> {
    return this._apiService.get<ClientModel[]>('/clients/all', createHttpParams(params));
  }

  create(body): Observable<Response<ClientModel>> {
		return this._apiService.post<ClientModel>('/clients', body);
	}

  update(body): Observable<Response<ClientModel>> {
    return this._apiService.put<ClientModel>('/clients', body);
  }

  delete(id: number): Observable<Response<ClientModel>> {
    return this._apiService.delete<ClientModel>(`/clients/${id}`);;
  }
}
