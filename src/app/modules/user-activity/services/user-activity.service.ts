import { Injectable } from '@angular/core';
import { createHttpParams } from 'app/core/functions/http-param';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { UserActivityModel } from '../models/user-activity.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserActivityService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<UserActivityModel>> {
    return this._apiService.get<UserActivityModel>(`/clients/${id}`);
  }

  getAll(params?): Observable<Response<UserActivityModel[]>> {
    return this._apiService.get<UserActivityModel[]>('/clients/all', createHttpParams(params));
  }


  create(body): Observable<Response<UserActivityModel>> {
		return this._apiService.post<UserActivityModel>('/clients', body);
	}

  update(body): Observable<Response<UserActivityModel>> {
    return this._apiService.put<UserActivityModel>('/clients', body);
  }

  delete(id: number): Observable<Response<UserActivityModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.delete<UserActivityModel>(`/clients`, queryParams);;
  }
}
