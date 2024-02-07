import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { CargoStatusModel } from '../models/cargo-status.model';
import { createHttpParams } from 'app/core/functions/http-param';

@Injectable({
  providedIn: 'root'
})
export class CargoStatusService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<CargoStatusModel>> {
    return this._apiService.get<CargoStatusModel>(`/references/cargo-statuses/${id}`);
  }

  getAll(params?): Observable<Response<CargoStatusModel[]>> {
    return this._apiService.get<CargoStatusModel[]>('/references/cargo-statuses/all', createHttpParams(params));
  }

  create(body): Observable<Response<CargoStatusModel>> {
		return this._apiService.post<CargoStatusModel>('/references/cargo-statuses', body);
	}

  update(body): Observable<Response<CargoStatusModel>> {
    return this._apiService.put<CargoStatusModel>('/references/cargo-statuses', body);
  }

  delete(id: number): Observable<Response<CargoStatusModel>> {
    return this._apiService.delete<CargoStatusModel>(`/references/cargo-statuses/${id}`);;
  }
}
