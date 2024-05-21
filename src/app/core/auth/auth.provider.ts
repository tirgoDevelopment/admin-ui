import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, Provider } from '@angular/core';
import { authInterceptor } from 'app/core/auth/auth.interceptor';
import { AuthService } from 'app/core/auth/auth.service';

/**
 * Authentication providers
 *
 * This function returns an array of providers that are required to
 * configure the authentication service.
 *
 * @returns An array of providers that can be used to configure
 *          the authentication service.
 */
export const provideAuth = (): Array<Provider | EnvironmentProviders> =>
{
    /**
     * Provides the HTTP client with the authentication interceptor.
     *
     * The authentication interceptor is responsible for adding the access
     * token to the HTTP requests if it exists and it's not expired.
     */
    return [
        [
            // Provides the HTTP client with the authentication interceptor
            provideHttpClient(withInterceptors([authInterceptor])),
        ],
        {
            /**
             * Provides the value of the AuthService instance to the
             * environment initialization.
             *
             * The AuthService is responsible for managing the user
             * authentication.
             */
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(AuthService),
            multi   : true,
        },
    ];
};
