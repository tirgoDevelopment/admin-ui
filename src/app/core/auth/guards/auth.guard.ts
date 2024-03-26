import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { Observable, of, switchMap } from 'rxjs';

export const AuthGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
    const router: Router = inject(Router);
    const permissionService: NgxPermissionsService = inject(NgxPermissionsService);
permissionService.permissions$.subscribe(res=>{console.log(res)})
    return inject(AuthService).check().pipe(
        switchMap((authenticated) => {
            if (!authenticated) {
                const urlTree = router.parseUrl(`/auth/sign-in`);
                return of(urlTree);
                if (route.data.roles=='agent') {
                    const urlTree = router.parseUrl(`/agent-module`);
                    return of(urlTree);
                }
            }

            return of(true);
            return checkPermissions(route.data.roles);
        }),
    );
};


function checkPermissions(roles: string[]): Observable<boolean> {
    const permissionsService: NgxPermissionsService = inject(NgxPermissionsService);

    const hasPermissions = permissionsService.hasPermission(roles);
    if (hasPermissions) {
        return of(true);
    } else {
        const router: Router = inject(Router);
        const urlTree = router.parseUrl('/auth/sign-in');
        return of(false);
    }
}