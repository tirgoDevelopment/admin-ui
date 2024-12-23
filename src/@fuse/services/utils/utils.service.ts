import { Injectable } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({providedIn: 'root'})
export class FuseUtilsService
{

   /**
     * Constructor
     */
    constructor(
        private authService: AuthService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the equivalent "IsActiveMatchOptions" options for "exact = true".
     */
    get exactMatchOptions(): IsActiveMatchOptions
    {
        return {
            paths       : 'exact',
            fragment    : 'ignored',
            matrixParams: 'ignored',
            queryParams : 'exact',
        };
    }

    /**
     * Get the equivalent "IsActiveMatchOptions" options for "exact = false".
     */
    get subsetMatchOptions(): IsActiveMatchOptions
    {
        return {
            paths       : 'subset',
            fragment    : 'ignored',
            matrixParams: 'ignored',
            queryParams : 'subset',
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Generates a random id
     *
     * @param length
     */
    randomId(length: number = 10): string
    {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let name = '';

        for ( let i = 0; i < 10; i++ )
        {
            name += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return name;
    }

    /**
     * Checks if the user has a given permission
     *
     * @param permission - The permission to check
     * @returns true if the user has the given permission, false otherwise
     */
    hasPermission(permission: string): boolean {
        const user: any = jwtDecode(this.authService.accessToken);
        // The user object should have a "role" property with a "permission" property
        // that has an object with all the permissions as properties.
        // We check if the given permission exists in the user's permissions array.
        return user.role?.permission[permission];
    }

}
