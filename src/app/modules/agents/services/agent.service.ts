import { Injectable } from '@angular/core';
import { createHttpParams } from 'app/core/functions/http-param';
import { Response } from 'app/core/models/reponse';
import { ApiService } from 'app/core/service/api.service';
import { Observable } from 'rxjs';
import { AgentModel } from '../models/agent.model';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private _apiService: ApiService) { }

  get(id: number): Observable<Response<AgentModel>> {
    return this._apiService.get<AgentModel>(`/agents/${id}`);
  }

  getAll(params?): Observable<Response<AgentModel[]>> {
    return this._apiService.get<AgentModel[]>('/agents/all', createHttpParams(params));
  }

  getAllDeleted(params?): Observable<Response<AgentModel[]>> {
    return this._apiService.get<AgentModel[]>('/agents/deleted', createHttpParams(params));
  }

  create(body): Observable<Response<AgentModel>> {
		return this._apiService.post<AgentModel>('/agents', body);
	}

  update(body): Observable<Response<AgentModel>> {
    return this._apiService.put<AgentModel>('/agents', body);
  }

  delete(id: number): Observable<Response<AgentModel>> {
    return this._apiService.delete<AgentModel>(`/agents/${id}`);;
  }
}
