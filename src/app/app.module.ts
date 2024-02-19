import {ErrorHandler, NgModule, isDevMode, LOCALE_ID} from '@angular/core';
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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {appReducer, metaReducersProvider} from "./store/app.reducer";
import { EffectsModule } from '@ngrx/effects';
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import {VisitorStoreModule} from "./features/visitor/store/visitor-store.module";
import {VisitorStoreService} from "./features/visitor/store/visitor-store.service";

registerLocaleData(localeFr);

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
        ReactiveFormsModule,

      StoreModule.forRoot(appReducer, {
        runtimeChecks: {
          strictActionImmutability: false,
          strictStateImmutability: false,
        },
      }),
      EffectsModule.forRoot([]),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
      //
      VisitorStoreModule,
    ],
  providers: [
    metaReducersProvider,
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
    },
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private visitorStoreService: VisitorStoreService) {
    this.visitorStoreService.loadFeaturedCreators();
    this.visitorStoreService.loadActorsCreators();
    this.visitorStoreService.loadNewCreators();
    this.visitorStoreService.loadCategories();
  }
}
