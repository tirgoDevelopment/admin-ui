import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { of } from 'rxjs';

/**
 * A guard that checks if the user has the required permissions to access a certain route.
 * @param route The route that the user is trying to access.
 * @param state The state of the application.
 * @returns A boolean indicating whether the user has the required permissions or not.
 */
export const PermissionGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  const router: Router = inject(Router);

  const permissionService: NgxPermissionsService = inject(NgxPermissionsService);

  /**
   * Returns the required permissions for the given route.
   */
  const requiredPermissions = route.data.requiredPermissions;

  if (!requiredPermissions || requiredPermissions.length === 0) {
    // If there are no required permissions, the user is allowed to access the route.
    return true;
  }
  if (requiredPermissions.includes('dashboard')) {
    // If the required permission is 'dashboard', the user is always allowed to access the route.
    return of(true);
  } else {
    // Check if the user has the required permissions.
    const hasPermissions = compareKeysWithArray(permissionService.getPermissions(), requiredPermissions);

    if (hasPermissions) {
      // If the user has the required permissions, the user is allowed to access the route.
      return of(true);
    } else {
      // If the user does not have the required permissions, redirect to the dashboard.
      const urlTree = router.parseUrl('/dashboard');
      return of(urlTree);
    }
  }
};

function compareKeysWithArray(objectKeys, arrayToCompare) {
  for (let i = 0; i < arrayToCompare.length; i++) {
    let key = arrayToCompare[i];
    if (!objectKeys.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
