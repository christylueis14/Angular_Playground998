import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { BasicLoaderService } from './basic-loader.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService {

  constructor(public loaderSrvice:BasicLoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loaderSrvice.isLoading.next(true);
    this.loaderSrvice.isHeadnavVisible.next(false);
    return next.handle(req).pipe(
      finalize(
        ()=>{
          this.loaderSrvice.isLoading.next(false);
          this.loaderSrvice.isHeadnavVisible.next(true);
        }
      )
    )
  }
}
