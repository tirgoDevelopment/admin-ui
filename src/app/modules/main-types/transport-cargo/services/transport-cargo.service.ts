import { Injectable } from '@angular/core';
import { createHttpParams } from 'app/core/functions/http-param';
import { Response } from 'app/core/models/reponse';
import { Observable } from 'rxjs';
import { TransportCargoModel } from '../models/transport-cargo.model';
import { HttpParams } from '@angular/common/http';
import { RefService } from 'app/core/service/ref.service';

@Injectable({
  providedIn: 'root'
})
export class TransportCargoService {

  constructor(private _apiService: RefService) { }

  get(id: number): Observable<Response<TransportCargoModel>> {
    return this._apiService.get<TransportCargoModel>(`/references/transport-kinds/${id}`);
  }

  getAll(params?): Observable<Response<TransportCargoModel[]>> {
    return this._apiService.get<TransportCargoModel[]>('/references/transport-kinds/all', createHttpParams(params));
  }

  create(body): Observable<Response<TransportCargoModel>> {
		return this._apiService.post<TransportCargoModel>('/references/transport-kinds', body);
	}

  update(body): Observable<Response<TransportCargoModel>> {
    return this._apiService.put<TransportCargoModel>('/references/transport-kinds', body);
  }

  delete(id: number): Observable<Response<TransportCargoModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.delete<TransportCargoModel>(`/references/transport-kinds`, queryParams);;
  }
}
