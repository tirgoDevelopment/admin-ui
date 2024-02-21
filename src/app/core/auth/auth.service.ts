import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UserService } from 'app/core/user/user.service';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { jwtDecode } from "jwt-decode";
@Injectable({ providedIn: 'root' })
export class AuthService {
  public _baseUrl: string = 'http://localhost:3000/';
  public _authenticated: boolean = false;

  constructor(
    private _httpClient: HttpClient,
    private _userService: UserService,
  ) {
  }

  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  forgotPassword(email: string): Observable<any> {
    return this._httpClient.post('api/auth/forgot-password', email);
  }

  resetPassword(password: string): Observable<any> {
    return this._httpClient.post('api/auth/reset-password', password);
  }

  signIn(credentials: { email: string; password: string }): Observable<any> {
    // Throw error, if the user is already logged in
    if (this._authenticated) {
      return throwError('User is already logged in.');
    }

    return this._httpClient.post(`${this._baseUrl}api/v2/auth/login`, credentials).pipe(
      switchMap((response: any) => {
        this.accessToken = response.data.access_token;
        this._authenticated = true;
        return of(response);
      }),
    );
  }

  getDecodedAccessToken(): any {
    try {
      return jwtDecode(localStorage.getItem('accessToken'));
    } catch(Error) {
      return null;
    }
  }
  
  signInUsingToken(): Observable<any> {
    return this._httpClient.post('api/auth/sign-in-with-token', {
      accessToken: this.accessToken,
    }).pipe(
      catchError(() =>
        of(false),
      ),
      switchMap((response: any) => {
        if (response.accessToken) {
          this.accessToken = response.accessToken;
        }
        this._authenticated = true;
        this._userService.user = response.user;
        return of(true);
      }),
    );
  }

  signOut(): Observable<any> {
    localStorage.removeItem('accessToken');
    this._authenticated = false;
    return of(true);
  }

  signUp(user: { name: string; email: string; password: string; company: string }): Observable<any> {
    return this._httpClient.post('api/auth/sign-up', user);
  }

  unlockSession(credentials: { email: string; password: string }): Observable<any> {
    return this._httpClient.post('api/auth/unlock-session', credentials);
  }

  check(): Observable<boolean> {
    if (this.accessToken) {
      return of(true);
    }
    
    if (this._authenticated) {
      return of(true);
    }

    if (!this.accessToken) {
      return of(false);
    }

    if (AuthUtils.isTokenExpired(this.accessToken)) {
      return of(false);
    }
 
    // return of(true)
    // If the access token exists, and it didn't expire, sign in using it
    // return this.signInUsingToken();
  }
}
