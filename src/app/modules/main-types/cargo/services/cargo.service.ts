import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { Observable } from 'rxjs';
import { ApiService } from 'app/core/service/api.service';
import { createHttpParams } from 'app/core/functions/http-param';
import { CargoModel } from '../models/cargo.model';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<CargoModel>> {
    return this._apiService.get<CargoModel>(`/references/cargo-types/${id}`);
  }

  getAll(params?): Observable<Response<CargoModel[]>> {
    return this._apiService.get<CargoModel[]>('/references/cargo-types/all', createHttpParams(params));
  }

  create(body): Observable<Response<CargoModel>> {
		return this._apiService.post<CargoModel>('/references/cargo-types', body);
	}

  update(body): Observable<Response<CargoModel>> {
    return this._apiService.put<CargoModel>('/references/cargo-types', body);
  }

  delete(id: number): Observable<Response<CargoModel>> {
    return this._apiService.delete<CargoModel>(`/references/cargo-types/${id}`);;
  }
}
