import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UserService } from 'app/core/user/user.service';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { env } from 'app/environmens/environment';
import { NgxPermissionsService } from 'ngx-permissions';
@Injectable({ providedIn: 'root' })
export class AuthService {
  public _baseUrl: string = env.apiUrl;
  public _authenticated: boolean = false;

  constructor(
    private _httpClient: HttpClient,
    private _userService: UserService,
    private permissionService:NgxPermissionsService
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
    if (this._authenticated) {
      return throwError('User is already logged in.');
    }
    return this._httpClient.post(`${this._baseUrl}/users/login`, credentials).pipe(
      switchMap((response: any) => {
        this.accessToken = response.data.token;
        let user: any;
        user = this.accessToken ? jwtDecode(this.accessToken) : null;
        let allPermission = user?.role?.permission ? this.checkPermissions(user?.role?.permission) : [];
        this.permissionService.loadPermissions(allPermission);
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
        let user: any;
        user = this.accessToken ? jwtDecode(this.accessToken) : null;
        console.log(user?.role?.permission, 'permission')
        let allPermission = user?.role?.permission ? this.checkPermissions(user?.role?.permission) : [];
        this.permissionService.loadPermissions(allPermission);
        return of(true);
      }),
    );
  }

   checkPermissions(permissions: any) {
    const keysToCheck = [
        'addDriver',
        'addClient',
        'addOrder',
        'cancelOrder',
        'seeDriversInfo',
        'seeClientsInfo',
        'sendPush',
        'chat',
        'tracking',
        'driverFinance',
        'clientMerchantFinance',
        'driverMerchantFinance',
        'registerClientMerchant',
        'registerDriverMerchant',
        'verifyDriver',
        'clientMerchantList',
        'driverMerchantList',
        'adminPage',
        'finRequest',
        'driverMerchantPage',
        'clientMerchantPage',
        'driverVerification',
        'agentPage',
        'dashboardPage',
        'archivedPage',
        'orderPage',
        'referencesPage',
        'activePage',
        'adminAgentPage',
        'attachDriverAgent',
        'addBalanceAgent',
        'seeSubscriptionTransactionAgent',
        'seePaymentTransactionAdmin',
        'seeServiceTransactionAdmin'
    ];
    let result = keysToCheck.filter(key => permissions[key]);
    return result
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
