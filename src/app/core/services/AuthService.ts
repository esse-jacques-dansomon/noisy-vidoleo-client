import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {BehaviorSubject, finalize, Observable, tap} from 'rxjs';
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {LoginResponse, LoginResponsePayload} from "../data/LoginResponse";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected apiUrl: string = environment.apiUrl;

  private _connectedVendor: BehaviorSubject<LoginResponsePayload> = new BehaviorSubject(null);

  connectedUser$ : Observable<LoginResponsePayload> = this.verifyInfos();

  verifyInfos() : Observable<LoginResponsePayload> {
    return  this.http.get<LoginResponsePayload>(`${this.apiUrl}/jwt/me`);
    // this._connectedVendor.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(`${this.apiUrl}jwt/login`, { email, password }).pipe(
      tap(
        next => {
          this.setSession(next);
          this.decodeToken(next.access_token);
          this._connectedVendor.next(this.decodeToken(next.access_token) as LoginResponsePayload);
        }
      )
    );
  }

  register(data: any) {
    let body = {
      "name": data.nom,
      "first_name": data.prenom,
      "email": data.login,
      "password": data.password,
      "phone": data.telephone,
      "country": data.codePays,
      "boutique_name": data.nomboutique,
    }
    return this.http.post<LoginResponse>(`${this.apiUrl}/vendeurs`, body).pipe(
      tap(
        next => {
          this.setSession(next);
        },
      )
    );
  }


  private setSession(authResult: LoginResponse) {
    // Set the time that the access token will expire moment
    const expiresAt = moment().add(authResult.expires_in, 'second');
    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));

  }

  clearLocalStorage() {
    localStorage.clear();
    this._connectedVendor.next(null);
  }

  logout() {
    this.http
      .post<unknown>(`${this.apiUrl}/jwt/logout`, {})
      .pipe(
        finalize(() => {
          this.clearLocalStorage();
          // this.stopTokenTimer();
          this.router.navigate(['/']);
        })
      ).subscribe();
  }

  public isLoggedIn() {
    return  moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const token = localStorage.getItem('access_token');
    const decoded = this.decodeToken(token);
    const expiresAt = decoded.exp;
    return moment(expiresAt);
  }

  forgetPassword(email: string) {
    //save email on localStorage
    localStorage.setItem('email_reset', email);
    return this.http.post(`${this.apiUrl}/auth/password/forget`, {email});
  }
  sendotp(otp: string) {

    let email = localStorage.getItem('email_reset');
    return this.http.post(`${this.apiUrl}/auth/password/otp/verif`, {email, otp});
  }


  updateVendeur(vendeur: any){
    let url = `${this.apiUrl}` + '/vendeur';
    return this.http.post(url, vendeur);

  }
  updatePassword(vendeur: any){
    let url = `${this.apiUrl}` + '/auth/password/update';
    return this.http.post(url, vendeur);
  }


  private decodeToken(token: string) {
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    }
    return null;
  }
}
