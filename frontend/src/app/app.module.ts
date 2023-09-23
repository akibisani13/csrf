import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
// import { CsrfInterceptor } from './Csrf.Interceptor';
import { customInterceptor } from './hero.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  declarations: [
    AppComponent,
    HeroesComponent,
  ],providers: [
    // CsrfService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: customInterceptor,
        multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
