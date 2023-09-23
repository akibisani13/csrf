import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CsrfTokenService {
    getCsrfToken(url: string): Promise<any> {
        return fetch('http://localhost:9000/account/generate-csrf-token').then(token => {
            if(token.ok){
              // console.log("*********************"+token.text())
                return token.text().then((csrfToken) => {
                  console.log('CSRF Token inside the service classs:', csrfToken); // Log the CSRF token to the console
                  return csrfToken;
                });;
            }
            return 'Error While Fetching Token';
        }).catch(e => 'Error While Fetching Token');
    }

    generateUrl(url: string): string{
        const urlData = url.split('/');
        return `${urlData[0]}//${urlData[2]}/${urlData[3]}`;
    }

    isTokenRequried(req: any, cookieheaderName: any): boolean {
        if(req.headers.has(cookieheaderName)){
            return false;
        }
        else if(req.url.toLowerCase().includes('generate-csrf-token')){ 
            return false;
        }
        else if(req.url.toLowerCase().includes('.svg') || req.url.toLowerCase().includes('.js') || req.url.toLowerCase().includes('.otf') || req.url.toLowerCase().includes('.css')){
            return false;
        }else{
            return true;
        }
    }

    
    
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class CsrfService {
//   constructor(private http: HttpClient) {}

//   getCsrfToken() {
//     return this.http.get('http://localhost:9000/account/generate-csrf-token').pipe(
//       tap((csrfToken: any) => {
//         console.log('CSRF Token:------', csrfToken.token); // Log the CSRF token to the console
//       })
//     );
//   }

// }
