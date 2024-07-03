import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = 'our token'; // TODO
    const authreq = req.clone({
      setHeaders: { Authorization: `${token}` },
    });

    return next.handle(authreq);
  }
}
