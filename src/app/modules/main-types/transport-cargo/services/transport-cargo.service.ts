import { Injectable } from '@angular/core';
import { createHttpParams } from 'app/core/functions/http-param';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { TransportCargoModel } from '../models/transport-cargo.model';

@Injectable({
  providedIn: 'root'
})
export class TransportCargoService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<TransportCargoModel>> {
    return this._apiService.get<TransportCargoModel>(`/transport-kinds/${id}`);
  }

  getAll(params?): Observable<Response<TransportCargoModel[]>> {
    return this._apiService.get<TransportCargoModel[]>('/transport-kinds/all', createHttpParams(params));
  }

  create(body): Observable<Response<TransportCargoModel>> {
		return this._apiService.post<TransportCargoModel>('/transport-kinds', body);
	}

  update(body): Observable<Response<TransportCargoModel>> {
    return this._apiService.put<TransportCargoModel>('/transport-kinds', body);
  }

  delete(id: number): Observable<Response<TransportCargoModel>> {
    return this._apiService.delete<TransportCargoModel>(`/transport-kinds/${id}`);;
  }
}
