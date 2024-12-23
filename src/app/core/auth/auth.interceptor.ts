import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { catchError, Observable, throwError } from 'rxjs';

/**
 * Authentication HTTP interceptor
 *
 * This interceptor is responsible for adding the access token to the
 * HTTP requests if it exists and it's not expired. If the response status
 * code is 401 (Unauthorized), it signs out the user and reloads the
 * page.
 */
export const authInterceptor = (
    req: HttpRequest<unknown>, 
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
    const authService = inject(AuthService);

    // Clone the request to prevent side effects
    let newReq = req.clone();

    // If the access token exists and it's not expired, add it to the
    // request headers
    if (authService.accessToken && !AuthUtils.isTokenExpired(authService.accessToken)) {
        newReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authService.accessToken),
        });
    }

    // Call the next handler with the modified request
    return next(newReq).pipe(
        // Catch the errors and check if the response status code is 401
        catchError((error) => {

            // If the error is a HttpErrorResponse and the status code is 401,
            // sign out the user and reload the page
            if (error instanceof HttpErrorResponse && error.status === 401) {
                authService.signOut();
                location.reload();
            }

            // Re-throw the error
            return throwError(error);
        }),
    );
 };
