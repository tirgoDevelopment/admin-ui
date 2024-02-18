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

  constructor(private _apiService: ApiService, private _http:HttpClient) { }

  get(id: number): Observable<Response<AgentModel>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._apiService.get<AgentModel>(`/agents`,   queryParams );
  }

  getAll(params?): Observable<Response<AgentModel[]>> {
    return this._apiService.get<AgentModel[]>('/users/agents', createHttpParams(params));
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


  getAllDeleted(params?): Observable<Response<AgentModel[]>> {
    return this._apiService.get<AgentModel[]>('/agents/deleted', createHttpParams(params));
  }

  create(body): Observable<Response<AgentModel>> {
		return this._apiService.post<AgentModel>('/users/agents/register', body);
	}

  update(body): Observable<Response<AgentModel>> {
    return this._apiService.put<AgentModel>('/users/agents/update', body);
  }

  delete(id: number): Observable<Response<AgentModel>> {
    return this._apiService.delete<AgentModel>(`/agents/${id}`);;
  }
}
