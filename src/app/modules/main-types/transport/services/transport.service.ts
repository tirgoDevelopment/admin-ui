import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { Observable } from 'rxjs';
import { TransportModel } from '../models/transport.model';
import { ApiService } from 'app/core/service/api.service';
import { createHttpParams } from 'app/core/functions/http-param';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<TransportModel>> {
    return this._apiService.get<TransportModel>(`/references/transport-types/${id}`);
  }

  getAll(params?): Observable<Response<TransportModel[]>> {
    return this._apiService.get<TransportModel[]>('/references/transport-types/all', createHttpParams(params));
  }

  create(body): Observable<Response<TransportModel>> {
		return this._apiService.post<TransportModel>('/transport-types', body);
	}

  update(body): Observable<Response<TransportModel>> {
    return this._apiService.put<TransportModel>('/transport-types', body);
  }

  delete(id: number): Observable<Response<TransportModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.delete<TransportModel>(`/references/transport-types`, queryParams);;
  }
}
