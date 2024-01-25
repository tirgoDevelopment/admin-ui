import { HttpParams } from '@angular/common/http';

export function createHttpParams(params: {}): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    if (!params) return httpParams;
    Object.keys(params).forEach(param => {
        if (params[param] !== undefined && params[param] !== null && params[param] !== '') {
            httpParams = httpParams.set(param, params[param]);
        }
    });

    return httpParams;
}