import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { Observable } from 'rxjs';
import { createHttpParams } from 'app/core/functions/http-param';
import { CargoModel } from '../models/cargo.model';
import { HttpParams } from '@angular/common/http';
import { RefService } from 'app/core/service/ref.service';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private _apiService: RefService) { }

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
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.delete<CargoModel>(`/references/cargo-types`,queryParams);;
  }
}
