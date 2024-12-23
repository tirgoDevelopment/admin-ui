import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { of, switchMap } from 'rxjs';

/**
 * A guard that checks if the user is authenticated before allowing them to access
 * a certain route.
 *
 * @param {object} route The route that the user is trying to access.
 * @param {object} state The state of the application.
 * @returns {Observable<boolean>} An observable that resolves to a boolean indicating
 * whether the user is authenticated or not. If the user is not authenticated, the
 * observable will resolve to a URL tree that the user should be redirected to.
 */
export const AuthGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
    const router: Router = inject(Router);
    return inject(AuthService).check().pipe(
        switchMap((authenticated) => {
            // If the user is not authenticated, redirect to the sign-in page.
            if (!authenticated) {
                const urlTree = router.parseUrl(`/auth/sign-in`);
                return of(urlTree);
            }
            // If the user is authenticated, allow them to access the route.
            else {
                return of(true);
            }
        }),
    );
};
