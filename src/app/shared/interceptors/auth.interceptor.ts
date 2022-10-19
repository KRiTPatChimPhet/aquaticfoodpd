import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { exhaustMap, Observable, take } from 'rxjs';
import { AuthService } from '../../core/service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this._authService.userSubject.pipe(
      take(1),
      exhaustMap(
        (user) => {
          if (user) {
            const modifiedReq = request.clone({
              params: new HttpParams().set('auth', <string>user?.token)
            });
            return next.handle(modifiedReq);
          } else {
            return next.handle(request);
          }
        }
      )
    );
  }
}
