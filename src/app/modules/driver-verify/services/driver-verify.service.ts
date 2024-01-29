import { Injectable } from '@angular/core';
import { createHttpParams } from 'app/core/functions/http-param';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { DriverVerifyModel } from '../models/driver-verify.model';

@Injectable({
  providedIn: 'root'
})
export class DriverVerifyService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<DriverVerifyModel>> {
    return this._apiService.get<DriverVerifyModel>(`/driver-verify/${id}`);
  }

  getAll(params?): Observable<Response<DriverVerifyModel[]>> {
    return this._apiService.get<DriverVerifyModel[]>('/driver-verify/all', createHttpParams(params));
  }


  create(body): Observable<Response<DriverVerifyModel>> {
		return this._apiService.post<DriverVerifyModel>('/driver-verify', body);
	}

  update(body): Observable<Response<DriverVerifyModel>> {
    return this._apiService.put<DriverVerifyModel>('/driver-verify', body);
  }

  delete(id: number): Observable<Response<DriverVerifyModel>> {
    return this._apiService.delete<DriverVerifyModel>(`/driver-verify/${id}`);;
  }
}
