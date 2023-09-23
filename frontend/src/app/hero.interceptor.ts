import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable, from, switchMap } from 'rxjs';
import { CsrfTokenService} from './Csrf.service'

@Injectable()
export class customInterceptor implements HttpInterceptor {

  constructor(private tokenExtractor: CsrfTokenService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cookieheaderName = 'X-XSRF-TOKEN';
    const url = this.tokenExtractor.generateUrl(req.url);
    
    if(this.tokenExtractor.isTokenRequried(req, cookieheaderName)){
      return from(this.tokenExtractor.getCsrfToken(url)).pipe(
        switchMap((token: string) => {
          req = req.clone({ headers: req.headers.set(cookieheaderName, token) });
          req = req.clone({ headers: req.headers.set(cookieheaderName+'-FOR', req.url) });
          return next.handle(req);
        })
      );
    }else {
      return next.handle(req);
    }
  }

}
