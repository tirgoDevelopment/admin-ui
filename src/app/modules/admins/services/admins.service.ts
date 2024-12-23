import { Injectable } from '@angular/core';
import { Response } from 'app/core/models/reponse';
import { Observable } from 'rxjs';
import { AdminModel } from '../models/admin.model';
import { ApiService } from 'app/core/service/api.service';
import { createHttpParams } from 'app/core/functions/http-param';
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AdminsService {
    constructor(private _apiService: ApiService) { }

    get(id: number): Observable<Response<AdminModel>> {
        let queryParams = new HttpParams();
        queryParams = queryParams.append('id', id);
        return this._apiService.get<AdminModel>(`/users/staffs/staff-by-id`, queryParams);
    }

    getAll(params?): Observable<Response<AdminModel[]>> {
        return this._apiService.get<AdminModel[]>(
            '/users/staffs/all-staffs',
            createHttpParams(params)
        );
    }

    create(body): Observable<Response<AdminModel>> {
        return this._apiService.post<AdminModel>('/users/staffs/register', body);
    }

    update(body): Observable<Response<AdminModel>> {
        return this._apiService.put<AdminModel>('/users/staffs', body);
    }

    block(id: number, body: any): Observable<Response<AdminModel>> {
        let queryParams = new HttpParams();
        queryParams = queryParams.append("id", id);
        return this._apiService.patch<AdminModel>(`/users/staffs`, body, queryParams);
    }

    delete(id: number): Observable<Response<AdminModel>> {
        let queryParams = new HttpParams();
        queryParams = queryParams.append('id', id);
        return this._apiService.delete<AdminModel>(`/users/staffs`, queryParams);
    }
}
