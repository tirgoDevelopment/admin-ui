import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { Observable } from 'rxjs';
import { ApiService } from 'app/core/service/api.service';
import { createHttpParams } from 'app/core/functions/http-param';
import { CargoGroupModel } from '../models/cargo-group.model';


@Injectable({
  providedIn: 'root'
})
export class CargoGroupService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<CargoGroupModel>> {
    return this._apiService.get<CargoGroupModel>(`/cargo-type-groups/${id}`);
  }

  getAll(params?): Observable<Response<CargoGroupModel[]>> {
    return this._apiService.get<CargoGroupModel[]>('/cargo-type-groups/all', createHttpParams(params));
  }

  create(body): Observable<Response<CargoGroupModel>> {
		return this._apiService.post<CargoGroupModel>('/cargo-type-groups', body);
	}

  update(body): Observable<Response<CargoGroupModel>> {
    return this._apiService.put<CargoGroupModel>('/cargo-type-groups', body);
  }

  delete(id: number): Observable<Response<CargoGroupModel>> {
    return this._apiService.delete<CargoGroupModel>(`/cargo-type-groups/${id}`);;
  }
}
