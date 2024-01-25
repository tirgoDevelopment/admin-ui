import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { ArchiveUserModel } from '../models/archive-user.model';
import { createHttpParams } from 'app/core/functions/http-param';

@Injectable({
  providedIn: 'root'
})
export class ArchiveUserService {


  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<ArchiveUserModel>> {
    return this._apiService.get<ArchiveUserModel>(`/archive-user/${id}`);
  }

  getAll(params?): Observable<Response<ArchiveUserModel[]>> {
    return this._apiService.get<ArchiveUserModel[]>('/archive-user/all', createHttpParams(params));
  }

  create(body): Observable<Response<ArchiveUserModel>> {
		return this._apiService.post<ArchiveUserModel>('/archive-user', body);
	}

  update(body): Observable<Response<ArchiveUserModel>> {
    return this._apiService.put<ArchiveUserModel>('/archive-user', body);
  }

  delete(id: number): Observable<Response<ArchiveUserModel>> {
    return this._apiService.delete<ArchiveUserModel>(`/archive-user/${id}`);;
  }
}
