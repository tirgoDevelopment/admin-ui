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

  restore(body): Observable<Response<ClientModel>> {
		return this._apiService.patch<ClientModel>('/restore-user', body, {});
	}

}
