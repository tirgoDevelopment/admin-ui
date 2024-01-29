import { Injectable } from '@angular/core';
import { createHttpParams } from 'app/core/functions/http-param';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { SubscriptionModel } from '../models/subscription.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<SubscriptionModel>> {
    return this._apiService.get<SubscriptionModel>(`/subscriptions/${id}`);
  }

  getAll(params?): Observable<Response<SubscriptionModel[]>> {
    return this._apiService.get<SubscriptionModel[]>('/subscriptions/all', createHttpParams(params));
  }

  create(body): Observable<Response<SubscriptionModel>> {
		return this._apiService.post<SubscriptionModel>('/subscriptions', body);
	}

  update(body): Observable<Response<SubscriptionModel>> {
    return this._apiService.put<SubscriptionModel>('/subscriptions', body);
  }

  delete(id: number): Observable<Response<SubscriptionModel>> {
    return this._apiService.delete<SubscriptionModel>(`/subscriptions/${id}`);;
  }
}