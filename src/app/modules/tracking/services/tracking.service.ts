import { Injectable } from '@angular/core';
import { createHttpParams } from 'app/core/functions/http-param';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { TrackingModel } from '../models/tracking.model';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<TrackingModel>> {
    return this._apiService.get<TrackingModel>(`/tracking/${id}`);
  }

  getAll(params?): Observable<Response<TrackingModel[]>> {
    return this._apiService.get<TrackingModel[]>('/tracking/all', createHttpParams(params));
  }

  create(body): Observable<Response<TrackingModel>> {
		return this._apiService.post<TrackingModel>('/tracking', body);
	}

  update(body): Observable<Response<TrackingModel>> {
    return this._apiService.put<TrackingModel>('/tracking', body);
  }

  delete(id: number): Observable<Response<TrackingModel>> {
    return this._apiService.delete<TrackingModel>(`/tracking/${id}`);;
  }
}
