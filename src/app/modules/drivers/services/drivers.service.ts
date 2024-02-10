import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { Observable } from 'rxjs';
import { DriverModel } from '../models/driver.model';
import { createHttpParams } from 'app/core/functions/http-param';
import { ApiService } from 'app/core/service/api.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<DriverModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.get<DriverModel>(`/users/drivers/id`, queryParams);
  }

  getAll(params?): Observable<Response<DriverModel[]>> {
    return this._apiService.get<DriverModel[]>('/users/drivers/all', createHttpParams(params));
  }

  create(body): Observable<Response<DriverModel>> {
    body.phoneNumbers = [body.phoneNumbers]
    return this._apiService.post<DriverModel>('/users/drivers/register', body);
  }

  createTransport(body): Observable<Response<DriverModel>> {
    return this._apiService.post<DriverModel>('/users/driver/transport', body);
  }

  getTransportWithDriver(driverId:number, transportId:number): Observable<Response<DriverModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("driverId", driverId);
    queryParams = queryParams.append("transportId", transportId);
    return this._apiService.get<DriverModel>(`/users/driver/transport`, queryParams);
  }

  update(body): Observable<Response<DriverModel>> {
    body.phoneNumbers = [body.phoneNumbers]
    return this._apiService.put<DriverModel>('/users/drivers/', body);
  }

  delete(id: number): Observable<Response<DriverModel>> {
    return this._apiService.delete<DriverModel>(`/users/drivers/${id}`);;
  }
}
