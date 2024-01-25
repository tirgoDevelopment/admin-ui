import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { Observable } from 'rxjs';
import { DriverModel } from '../models/driver.model';
import { createHttpParams } from 'app/core/functions/http-param';
import { ApiService } from 'app/core/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<DriverModel>> {
    return this._apiService.get<DriverModel>(`/drivers/${id}`);
  }

  getAll(params?): Observable<Response<DriverModel[]>> {
    return this._apiService.get<DriverModel[]>('/drivers/all', createHttpParams(params));
  }

  create(body): Observable<Response<DriverModel>> {
		return this._apiService.post<DriverModel>('/drivers', body);
	}

  update(body): Observable<Response<DriverModel>> {
    return this._apiService.put<DriverModel>('/drivers', body);
  }

  delete(id: number): Observable<Response<DriverModel>> {
    return this._apiService.delete<DriverModel>(`/drivers/${id}`);;
  }
}
