import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Response } from '../models/reponse';
import { ToastrService } from 'ngx-toastr';
import { env } from 'app/environmens/environment';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
	providedIn: 'root'
})
export class RefService {

	public apiUrl: string;
	protected host: string;
	protected apiVersion: string;


	constructor(public _toasterService:ToastrService, private translocaService:TranslocoService,  protected _http: HttpClient ) {
		this.apiUrl = env.references;
		this.formatErrors = this.formatErrors.bind(this);
	}

	httpOptions = {
		headers: new HttpHeaders({
			'Accept': 'application/json',
			// 'Content-Type': 'application/json'
		})
	}

	public formatErrors(error: any) {
		return throwError(error);
	}

	get<T>(path: string, params: HttpParams = new HttpParams()): Observable<Response<T>> {
		return this._http.get<Response<T>>(`${this.apiUrl}${path}`, { params }).pipe(catchError(this.formatErrors));
	}

	getOne<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
		return this._http.get<T>(`${this.apiUrl}${path}`, { params })			
	}

	put<T>(path: string, body: Object = {}): Observable<Response<T>> {
		return this._http.put<Response<T>>(
			`${this.apiUrl}${path}`,
			body,
			this.httpOptions
		).pipe(catchError(this.formatErrors));
	}

	patch<T>(path: string, body: Object = {}, queryParams): Observable<Response<T>> {
		const params = queryParams ? { params: queryParams } : {};
		return this._http.patch<Response<T>>(
			`${this.apiUrl}${path}`,
			body,
			params,
		).pipe(catchError(this.formatErrors));
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
			).pipe(catchError(this.formatErrors));
		} else {
			return this._http.post<Response<T>>(
				`${this.apiUrl}${path}`,
				body,
				headers
			).pipe(catchError(this.formatErrors));
		}
	
	}

	postFile(path: string, body: FormData, responseType = 'text' as 'json'): Observable<any> {
		const baseUrl = path.indexOf('http') === 0 ? '' : this.apiUrl;
		return this._http.post<any>(`${baseUrl}${path}`, body, {
			reportProgress: true,
			observe: 'events',
			responseType
		}).pipe(catchError(this.formatErrors));
	}

	downLoadFile(path: string, body): Observable<any> {
		const baseUrl = path.indexOf('http') === 0 ? '' : this.apiUrl;
		return this._http.post<any>(
			`${baseUrl}${path}`,
			body,
			{
				responseType: 'blob' as 'json'
			}
		).pipe(catchError(this.formatErrors));
	}

	getFile(path: string, params: HttpParams = new HttpParams()): Observable<any> {
		const baseUrl = path.indexOf('http') > -1 ? '' : this.apiUrl;
		return this._http.get<any>(`${baseUrl}${path}`, {
			params,
			responseType: 'blob' as 'json'
		}).pipe(catchError(this.formatErrors));
	}

	delete<T>(path: string, queryParams): Observable<Response<T>> {
		const params = queryParams ? { params: queryParams } : {};
		return this._http.delete<Response<T>>(
			`${this.apiUrl}${path}`,
			params
		).pipe(catchError(this.formatErrors));
	}
}
