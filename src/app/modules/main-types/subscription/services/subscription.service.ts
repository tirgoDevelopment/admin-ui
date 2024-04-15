import { Injectable } from '@angular/core';
import { createHttpParams } from 'app/core/functions/http-param';
import { Response } from 'app/core/models/reponse';
import { Observable } from 'rxjs';
import { SubscriptionModel } from '../models/subscription.model';
import { HttpParams } from '@angular/common/http';
import { RefService } from 'app/core/service/ref.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private _apiService: RefService) { }

  get(id: number): Observable<Response<SubscriptionModel>> {
    return this._apiService.get<SubscriptionModel>(`/references/subscriptions/${id}`);
  }

  getAll(params?): Observable<Response<SubscriptionModel[]>> {
    return this._apiService.get<SubscriptionModel[]>('/references/subscriptions/all', createHttpParams(params));
  }

  create(body): Observable<Response<SubscriptionModel>> {
		return this._apiService.post<SubscriptionModel>('/references/subscriptions', body);
	}

  update(body): Observable<Response<SubscriptionModel>> {
    return this._apiService.put<SubscriptionModel>('/references/subscriptions', body);
  }

  delete(id: number): Observable<Response<SubscriptionModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.delete<SubscriptionModel>(`/references/subscriptions`, queryParams);;
  }
}
