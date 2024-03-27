import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { of } from 'rxjs';

export const PermissionGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  const router: Router = inject(Router);

  const permissionService: NgxPermissionsService = inject(NgxPermissionsService);

  const requiredPermissions = route.data.requiredPermissions;

  if (!requiredPermissions || requiredPermissions.length === 0) {
    return true;
  }
  if (requiredPermissions.includes('dashboard')) {
    return of(true);
  }
  else if (compareKeysWithArray(permissionService.getPermissions(), requiredPermissions)) {
    return of(true);
  } else {
    const urlTree = router.parseUrl('/dashboards');
    return of(urlTree);
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

function checkPermissions(permissions: any) {
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
    'agentPage'
  ];
  let result = keysToCheck.filter(key => permissions[key]);
  return result
}