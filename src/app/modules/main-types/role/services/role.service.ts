import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { RoleModel } from '../models/role.model';
import { createHttpParams } from 'app/core/functions/http-param';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<RoleModel>> {
    return this._apiService.get<RoleModel>(`/roles/${id}`);
  }

  getAll(params?): Observable<Response<RoleModel[]>> {
    return this._apiService.get<RoleModel[]>('/roles/all', createHttpParams(params));
  }

  create(body): Observable<Response<RoleModel>> {
		return this._apiService.post<RoleModel>('/roles', body);
	}

  update(body): Observable<Response<RoleModel>> {
    return this._apiService.put<RoleModel>('/roles', body);
  }

  delete(id: number): Observable<Response<RoleModel>> {
    return this._apiService.delete<RoleModel>(`/roles/${id}`);;
  }
}
