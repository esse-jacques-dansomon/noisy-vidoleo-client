import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GlobalErrorHandler} from "./core/helpers/global-error-handler";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorInterceptor} from "./core/interceptors/error.interceptor";
import {AuthInterceptor} from "./core/interceptors/auth.interceptor";
import {CacheInterceptor} from "./core/interceptors/cache.interceptor";
import { ClientLayoutComponent } from './layout/layouts/client-layout/client-layout.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ClientLayoutComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxUsefulSwiperModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [
    // {provide: ErrorHandler, useClass: GlobalErrorHandler},
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CacheInterceptor,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
