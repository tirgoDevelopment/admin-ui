import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { CargoPackagesModel } from '../models/cargo-packages.model';
import { createHttpParams } from 'app/core/functions/http-param';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargoPackagesService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<CargoPackagesModel>> {
    return this._apiService.get<CargoPackagesModel>(`/references/cargo-packages/${id}`);
  }

  getAll(params?): Observable<Response<CargoPackagesModel[]>> {
    return this._apiService.get<CargoPackagesModel[]>('/references/cargo-packages/all', createHttpParams(params));
  }

  create(body): Observable<Response<CargoPackagesModel>> {
		return this._apiService.post<CargoPackagesModel>('/references/cargo-packages', body);
	}

  update(body): Observable<Response<CargoPackagesModel>> {
    return this._apiService.put<CargoPackagesModel>('/references/cargo-packages', body);
  }

  delete(id: number): Observable<Response<CargoPackagesModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.delete<CargoPackagesModel>(`/references/cargo-packages`, queryParams);;
  }
}
