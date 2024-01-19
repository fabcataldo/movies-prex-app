import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
  
  @Injectable()
  export class RequestInterceptor implements HttpInterceptor {
    constructor(private userService: UserService){ }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if(!req.url.includes('login')){
        const clonedRequest = req.clone({ headers: req.headers.append('x-token', this.userService.getToken() ) });
        return next.handle(clonedRequest);
      } else {
        return next.handle(req);
      }
      
    }
  }