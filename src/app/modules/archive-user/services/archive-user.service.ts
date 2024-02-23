import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { createHttpParams } from 'app/core/functions/http-param';
import { ClientModel } from 'app/modules/clients/models/client.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArchiveUserService {


  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<ClientModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("userId", id);
    return this._apiService.get<ClientModel>(`/users/archive/get-by`, queryParams);
  }

  getAll(params?): Observable<Response<ClientModel[]>> {
    return this._apiService.get<ClientModel[]>('/users/archive', createHttpParams(params));
  }

  getAllDeleted(params?): Observable<Response<ClientModel[]>> {
    return this._apiService.get<ClientModel[]>('/clients/deleted', createHttpParams(params));
  }

  create(body): Observable<Response<ClientModel>> {
		return this._apiService.post<ClientModel>('/clients', body);
	}

  update(body): Observable<Response<ClientModel>> {
    return this._apiService.put<ClientModel>('/clients', body);
  }

  delete(id: number): Observable<Response<ClientModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.delete<ClientModel>(`/clients`, queryParams);;
  }
}
