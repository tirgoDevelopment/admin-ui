import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Response } from '../models/reponse';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	public apiUrl: string;
	protected host: string;
	protected apiVersion: string;


	constructor(protected _http: HttpClient) {
		this.apiUrl = `https://test-api.tirgo.io/api/v2`;
	}

	httpOptions = {
		headers: new HttpHeaders({
			'Accept': 'application/json',
			// 'Content-Type': 'application/json'
		})
	}

	private formatErrors(error: any) {
		return throwError(error);
	}

	get<T>(path: string, params: HttpParams = new HttpParams()): Observable<Response<T>> {
		return this._http.get<Response<T>>(`${this.apiUrl}${path}`, { params })
	}

	getOne<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
		return this._http.get<T>(`${this.apiUrl}${path}`, { params })
			
	}

	put<T>(path: string, body: Object = {}): Observable<Response<T>> {
		return this._http.put<Response<T>>(
			`${this.apiUrl}${path}`,
			body,
			this.httpOptions
		)
	}

	patch<T>(path: string, body: Object = {}, queryParams): Observable<Response<T>> {
		const params = queryParams ? { params: queryParams } : {};
		return this._http.patch<Response<T>>(
			`${this.apiUrl}${path}`,
			body,
			params,
		)
	}

	post<T>(path: string, body: Object = {}, headers = this.httpOptions): Observable<Response<T>> {
		const baseUrl = path.indexOf('http') === 0 ? '' : this.apiUrl;
		if (body instanceof FormData) {
			headers.headers.set('Content-Type','multipart/form-data');
			console.log(headers.headers);
			return this._http.post<Response<T>>(
				`${this.apiUrl}${path}`,
				body,
				headers
			)
		} else {
			return this._http.post<Response<T>>(
				`${this.apiUrl}${path}`,
				body,
				headers
			)
		}
	
	}

	postFile(path: string, body: FormData, responseType = 'text' as 'json'): Observable<any> {
		const baseUrl = path.indexOf('http') === 0 ? '' : this.apiUrl;
		return this._http.post<any>(`${baseUrl}${path}`, body, {
			reportProgress: true,
			observe: 'events',
			responseType
		})
	}

	downLoadFile(path: string, body): Observable<any> {
		const baseUrl = path.indexOf('http') === 0 ? '' : this.apiUrl;
		return this._http.post<any>(
			`${baseUrl}${path}`,
			body,
			{
				responseType: 'blob' as 'json'
			}
		)
	}

	getFile(path: string, params: HttpParams = new HttpParams()): Observable<any> {
		const baseUrl = path.indexOf('http') > -1 ? '' : this.apiUrl;
		return this._http.get<any>(`${baseUrl}${path}`, {
			params,
			responseType: 'blob' as 'json'
		})
	}

	delete<T>(path: string, queryParams): Observable<Response<T>> {
		const params = queryParams ? { params: queryParams } : {};
		return this._http.delete<Response<T>>(
			`${this.apiUrl}${path}`,
			params
		)
	}
}
