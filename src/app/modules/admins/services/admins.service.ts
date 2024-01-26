import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { Observable } from 'rxjs';
import { AdminModel } from '../models/admin.model';
import { ApiService } from 'app/core/service/api.service';
import { createHttpParams } from 'app/core/functions/http-param';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<AdminModel>> {
    return this._apiService.get<AdminModel>(`/staffs/${id}`);
  }

  getAll(params?): Observable<Response<AdminModel[]>> {
    return this._apiService.get<AdminModel[]>('/staffs/all', createHttpParams(params));
  }

  create(body): Observable<Response<AdminModel>> {
    return this._apiService.post<AdminModel>('/auth/register', body);
  }

  update(body): Observable<Response<AdminModel>> {
    return this._apiService.put<AdminModel>('/staffs', body);
  }

  block(queryParams): Observable<Response<AdminModel>> {
    return this._apiService.patch<AdminModel>(`/staffs/block`, {}, queryParams);
  }

  delete(id: number): Observable<Response<AdminModel>> {
    return this._apiService.delete<AdminModel>(`/staffs/${id}`);;
  }
}
