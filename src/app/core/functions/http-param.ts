import { HttpParams } from '@angular/common/http';

/**
 * Create HttpParams from an object
 *
 * @param {object} params - object containing the key-value pairs of the
 * parameters to be added to the HttpParams object
 *
 * @returns {HttpParams} the HttpParams object with the parameters added
 */
export function createHttpParams(params: {}): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    if (!params) return httpParams;

    // Iterate over the key-value pairs of the object
    Object.keys(params).forEach(param => {
        // If the value is not undefined, null or empty string, add it to the
        // HttpParams object
        if (params[param] !== undefined && params[param] !== null && params[param] !== '') {
            httpParams = httpParams.set(param, params[param]);
        }
    });

    return httpParams;
}
