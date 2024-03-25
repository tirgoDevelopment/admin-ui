import { HttpRequest, HttpInterceptorFn, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorStauses } from '../enum/error.enum';
import { inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ToastrService } from 'ngx-toastr';

export const ErrorInterceptorService: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const translocaService = inject(TranslocoService);
  const toaster = inject(ToastrService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (Object.values(ErrorStauses).includes(error.error.message)) {
        toaster.error(translocaService.translate(Object.keys(ErrorStauses).find(k => ErrorStauses[k] === error.error.message)))
      } else {
        toaster.error(error.error.message)
      }
      return throwError(error);
    })
  );
};