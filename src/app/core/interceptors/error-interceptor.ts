import { HttpRequest, HttpInterceptorFn, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorStauses } from '../enum/error.enum';
import { inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ToastrService } from 'ngx-toastr';

/**
 * Interceptor that catches HTTP errors and shows error messages in a toaster
 */
export const ErrorInterceptorService: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  /**
   * Get the TranslocoService instance from the injector
   */
  const translocaService = inject(TranslocoService);
  /**
   * Get the ToastrService instance from the injector
   */
  const toaster = inject(ToastrService);
  /**
   * Catch all http errors and show error messages in the toaster
   */
  return next(req).pipe(
    /**
     * Catch all HTTP errors and show error messages in the toaster
     * @param error {HttpErrorResponse} The error object
     */
    catchError((error: HttpErrorResponse) => {
      /**
       * If the error message is undefined or null, show a generic error message
       */
      if (error.error.message == undefined || error.error.message == null) {
        return throwError(error);
      }
      /**
       * If the error message is a valid error status, show a translated error message
       */
      if (Object.values(ErrorStauses).includes(error.error.message)) {
        /**
         * Get the translated error message from the TranslocoService
         */
        const translatedMessage = translocaService.translate(Object.keys(ErrorStauses).find(k => ErrorStauses[k] === error.error.message));
        /**
         * Show the error message in the toaster
         */
        toaster.error(translatedMessage);
      } else {
        /**
         * Show the error message in the toaster
         */
        toaster.error(error.error.message);
      }
      /**
       * Re-throw the error so that the application knows there was an error
       */
      return throwError(error);
    }));
};
