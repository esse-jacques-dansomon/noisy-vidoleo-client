import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {Loading} from "notiflix/build/notiflix-loading-aio";
// import { SpinnerService } from './spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    Loading.standard();
    console.log("spinner")
    return next.handle(request).pipe(
      finalize(() => {
        console.log("spinner end")
        Loading.remove()
      })
    );
  }
}
