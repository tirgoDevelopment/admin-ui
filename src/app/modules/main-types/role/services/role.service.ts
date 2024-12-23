import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { Observable } from 'rxjs';
import { RoleModel } from '../models/role.model';
import { createHttpParams } from 'app/core/functions/http-param';
import { HttpParams } from '@angular/common/http';
import { RefService } from 'app/core/service/ref.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private _apiService: RefService) { }

  get(id: number): Observable<Response<RoleModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.get<RoleModel>(`/references/roles/get-by`, queryParams);
  }

  getAll(params?): Observable<Response<RoleModel[]>> {
    return this._apiService.get<RoleModel[]>('/references/roles/all-roles', createHttpParams(params));
  }

  create(body): Observable<Response<RoleModel>> {
    return this._apiService.post<RoleModel>('/references/roles', body);
  }

  update(body): Observable<Response<RoleModel>> {
    return this._apiService.put<RoleModel>('/references/roles', body);
  }

  delete(id: number): Observable<Response<RoleModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.delete<RoleModel>(`/references/roles`, queryParams);;
  }
}
