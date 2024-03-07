import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private toastr: ToastrService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('intercept')
    console.log(request)
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error)
        this.toastr.error(error.error?.error)
        return throwError(error);
      })
    );
  }
}
