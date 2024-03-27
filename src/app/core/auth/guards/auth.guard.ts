import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { jwtDecode } from 'jwt-decode';
import { NgxPermissionsService } from 'ngx-permissions';
import { Observable, of, switchMap, tap } from 'rxjs';

export const AuthGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
    const router: Router = inject(Router);
    const authService = inject(AuthService);
    let user: any;
    const permissionService: NgxPermissionsService = inject(NgxPermissionsService);
    user = authService.accessToken ? jwtDecode(authService.accessToken) : null;
    let allPermission = user?.role?.permission ? checkPermissions(user?.role?.permission) : [];
    permissionService.loadPermissions(allPermission);
    const hasPermissions = permissionService.getPermissions();
    return inject(AuthService).check().pipe(
        switchMap((authenticated) => {
            if (!authenticated) {
                const urlTree = router.parseUrl(`/auth/sign-in`);
                return of(urlTree);
            }
            else {
                return of(true);

                if (hasPermissions.hasOwnProperty('chat') && authenticated) {
                    const urlTree = router.parseUrl(`/chats`);
                    console.log(urlTree)
                    // return of(urlTree);
                    // return of(true).pipe(tap(()=>{
                    //     router.navigate(['/chats'])
                    // }));

                } else {
                    return of(true);
                }
            }
        }),
    );
};


function checkPermissions(permissions: any) {
    const keysToCheck = ['addDriver',
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
        'agentPage'
    ];
    let result = keysToCheck.filter(key => permissions[key]);
    return result
}