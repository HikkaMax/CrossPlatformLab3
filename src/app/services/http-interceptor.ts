import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SRV } from 'src/app/configuration';

@Injectable({
  providedIn: 'root'
})
export class HTTPInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = req.headers;
    console.log(req);
    if (req.url=="/groups/secret")
    {
      const token = localStorage.getItem('token');
      headers = headers.append('Authorization', `Bearer ${token}`);
      console.log(token, headers);
    }
    const request = req.clone({
      headers,
      url:`${SRV}${req.url}`,
    });
    console.log(request);
    return next.handle(request);
  }
}
