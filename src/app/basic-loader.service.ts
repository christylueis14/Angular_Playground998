import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicLoaderService {

  constructor() { }
  public isLoading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  public isHeadnavVisible:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(true);
 

 
}
