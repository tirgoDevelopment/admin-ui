import { Injectable } from '@angular/core';
import { createHttpParams } from 'app/core/functions/http-param';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { AgentModel } from '../models/agent.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { env } from 'app/environmens/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private _apiService: ApiService, private _http: HttpClient) { }

  get(id: number): Observable<Response<AgentModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.get<AgentModel>(`/users/agents/agent-by`, queryParams);
  }

  getAll(params?): Observable<Response<AgentModel[]>> {
    return this._apiService.get<AgentModel[]>('/users/agents', createHttpParams(params));
  }


  getAllByAgent(id?): Observable<Response<AgentModel[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("agentId", id);
    const options = { params: queryParams };
    return this._apiService.get<AgentModel[]>('/users/drivers/by-agent', queryParams);
  }

  getAgentTransactions(id?): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("agentId", id);
    const options = { params: queryParams };
    return this._http.get(env.merchantUrl + '/finance/transaction/agent-transactions', { params: queryParams });
  }

  getAgentbalance(id): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("agentId", id);
    const options = { params: queryParams };
    return this._http.get(env.merchantUrl + '/finance/transaction/agent-balance', { params: queryParams });
  }

  block(id: number, body): Observable<Response<AgentModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.patch<AgentModel>(`/users/agents/block-agent`, body, queryParams);
  }

  active(id: number): Observable<Response<AgentModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.patch<AgentModel>(`/users/agents/activate-agent`, {}, queryParams);
  }

  getAllDeleted(params?): Observable<Response<AgentModel[]>> {
    return this._apiService.get<AgentModel[]>('/agents/deleted', createHttpParams(params));
  }

  create(body): Observable<Response<AgentModel>> {
    return this._apiService.post<AgentModel>('/users/agents/register', body);
  }

  CreateBalanseAgent(body): Observable<any> {
    return this._http.post(env.merchantUrl + '/finance/transaction', body);
  }

  createsubscription(body): Observable<Response<AgentModel>> {
    return this._apiService.post<AgentModel>('/users/agents/add-subscription-driver', body);
  }

  connectToAgent(body): Observable<Response<AgentModel>> {
    return this._apiService.post<AgentModel>('/users/drivers/append-to-agent', body);
  }

  update(body): Observable<Response<AgentModel>> {
    return this._apiService.put<AgentModel>('/users/agents/update', body);
  }

  delete(id: number): Observable<Response<AgentModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.delete<AgentModel>(`/agents`, queryParams);;
  }
}
