import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  handleException(error: HttpErrorResponse) {
    console.log("Exception................");
    return this.router.navigate(["error"], { queryParams: { Message: error.message } });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {

    let requestHeaders = request.headers;
    requestHeaders = requestHeaders.append("userToken", "aaiodapifeaiodfaspuifbhpwu");
    requestHeaders = requestHeaders.append("content-type", "application/json");
    const updateRequest = request.clone({
      headers: requestHeaders
    });

    return next.handle(updateRequest).pipe(catchError(errorResponse => {
      return this.handleException(errorResponse);
    }));
  }
}
