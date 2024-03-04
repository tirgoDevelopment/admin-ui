import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { Observable, of, switchMap } from 'rxjs';

export const AuthGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
    const router: Router = inject(Router);
    // const permissionService: NgxPermissionsService = inject(NgxPermissionsService);
    return inject(AuthService).check().pipe(
        switchMap((authenticated) => {
            if (!authenticated) {
                const urlTree = router.parseUrl(`/auth/sign-in`);
                return of(urlTree);
            }

            return of(true);
            return checkPermissions(route.data.roles);
        }),
    );
};


function checkPermissions(roles: string[]): Observable<boolean> {
    const permissionsService: NgxPermissionsService = inject(NgxPermissionsService);

    // Check if the user has any of the required roles
    const hasPermissions = permissionsService.hasPermission(roles);
    if (hasPermissions) {
        return of(true);
    } else {
        // Redirect to unauthorized page or handle accordingly
        const router: Router = inject(Router);
        const urlTree = router.parseUrl('/unauthorized');

        return of(false);
    }
}