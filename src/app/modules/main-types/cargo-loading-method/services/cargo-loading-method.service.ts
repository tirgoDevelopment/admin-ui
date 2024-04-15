import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { Observable } from 'rxjs';
import { CargoLoadingModel } from '../models/cargo-loading.model';
import { createHttpParams } from 'app/core/functions/http-param';
import { HttpParams } from '@angular/common/http';
import { RefService } from 'app/core/service/ref.service';

@Injectable({
  providedIn: 'root'
})
export class CargoLoadingMethodService {

  constructor(private _apiService: RefService) { }

  get(id: number): Observable<Response<CargoLoadingModel>> {
    return this._apiService.get<CargoLoadingModel>(`/references/cargo-loading-method/${id}`);
  }

  getAll(params?): Observable<Response<CargoLoadingModel[]>> {
    return this._apiService.get<CargoLoadingModel[]>('/references/cargo-loading-method/all', createHttpParams(params));
  }

  create(body): Observable<Response<CargoLoadingModel>> {
		return this._apiService.post<CargoLoadingModel>('/references/cargo-loading-method', body);
	}

  update(body): Observable<Response<CargoLoadingModel>> {
    return this._apiService.put<CargoLoadingModel>('/references/cargo-loading-method', body);
  }

  delete(id: number): Observable<Response<CargoLoadingModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.delete<CargoLoadingModel>(`/references/cargo-loading-method`, queryParams);;
  }
}
