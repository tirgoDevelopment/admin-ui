import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { Observable } from 'rxjs';
import { DriverModel } from '../models/driver.model';
import { createHttpParams } from 'app/core/functions/http-param';
import { ApiService } from 'app/core/service/api.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from 'app/core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private _apiService: ApiService, private _authService: AuthService, private _http: HttpClient) { }
  
  get(id: number): Observable<Response<DriverModel>> {
    let queryParams = new HttpParams();
    let userId=this._authService.getDecodedAccessToken().userId;
    queryParams = queryParams.append("id", id);
    queryParams = queryParams.append("userId", userId);
    return this._apiService.get<DriverModel>(`/users/drivers/driver-by`, queryParams);
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

  updateTransport(body): Observable<Response<DriverModel>> {
    return this._apiService.put<DriverModel>('/users/driver/transport', body);
  }

  updateTransportDriver(body): Observable<Response<DriverModel>> {
    return this._apiService.post  <DriverModel>('/users/driver/transport/to-verification', body);
  }

  getTransportWithDriver(driverId: number, transportId: number): Observable<Response<DriverModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("driverId", driverId);
    queryParams = queryParams.append("transportId", transportId);
    return this._apiService.get<DriverModel>(`/users/driver/transport`, queryParams);
  }

  update(body): Observable<Response<DriverModel>> {
    body.phoneNumbers = [body.phoneNumbers]
    return this._apiService.put<DriverModel>('/users/drivers/', body);
  }

  block(id: number,body): Observable<Response<DriverModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.patch<DriverModel>(`/users/drivers/block`, body, queryParams);
  }

  active(id:number): Observable<Response<DriverModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.patch<DriverModel>(`/users/drivers/activate`, {}, queryParams);
  }

  delete(id: number): Observable<Response<DriverModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.delete<DriverModel>(`/users/drivers`, queryParams);;
  }
}
