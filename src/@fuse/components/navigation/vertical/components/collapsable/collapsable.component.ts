import { BooleanInput } from '@angular/cdk/coercion';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, HostBinding, Input, NO_ERRORS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavigationEnd, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { FuseNavigationItem } from '@fuse/components/navigation/navigation.types';
import { FuseVerticalNavigationBasicItemComponent } from '@fuse/components/navigation/vertical/components/basic/basic.component';
import { FuseVerticalNavigationDividerItemComponent } from '@fuse/components/navigation/vertical/components/divider/divider.component';
import { FuseVerticalNavigationGroupItemComponent } from '@fuse/components/navigation/vertical/components/group/group.component';
import { FuseVerticalNavigationSpacerItemComponent } from '@fuse/components/navigation/vertical/components/spacer/spacer.component';
import { FuseVerticalNavigationComponent } from '@fuse/components/navigation/vertical/vertical.component';
import { FuseConfig, FuseConfigService } from '@fuse/services/config';
import { FuseUtilsService } from '@fuse/services/utils';
import { TranslocoModule } from '@ngneat/transloco';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'fuse-vertical-navigation-collapsable-item',
    templateUrl: './collapsable.component.html',
    animations: fuseAnimations,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgClass, MatTooltipModule, NgxPermissionsModule, NgIf, MatIconModule, TranslocoModule, NgFor, FuseVerticalNavigationBasicItemComponent, forwardRef(() => FuseVerticalNavigationCollapsableItemComponent), FuseVerticalNavigationDividerItemComponent, FuseVerticalNavigationGroupItemComponent, FuseVerticalNavigationSpacerItemComponent],
})
export class FuseVerticalNavigationCollapsableItemComponent implements OnInit, OnDestroy {
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_autoCollapse: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() autoCollapse: boolean;
    @Input() item: FuseNavigationItem;
    @Input() name: string;
    config: FuseConfig;
    isCollapsed: boolean = true;
    isExpanded: boolean = false;
    private _fuseVerticalNavigationComponent: FuseVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _fuseNavigationService: FuseNavigationService,
        private _fuseConfigService: FuseConfigService,
        private cdr: ChangeDetectorRef,
        private utilsService: FuseUtilsService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Host binding for component classes
     */
    @HostBinding('class') get classList(): any {
        return {
            'fuse-vertical-navigation-item-collapsed': this.isCollapsed,
            'fuse-vertical-navigation-item-expanded': this.isExpanded,
        };
    }

    ngOnInit(): void {

        this._fuseConfigService.config$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config: FuseConfig) => {
                this.config = config;
                this.cdr.detectChanges();
            });

        this._fuseVerticalNavigationComponent = this._fuseNavigationService.getComponent(this.name);
        if (this._hasActiveChild(this.item, this._router.url)) {
            this.expand();
        }
        else {
            if (this.autoCollapse) {
                this.collapse();
            }
        }

        this._fuseVerticalNavigationComponent.onCollapsableItemCollapsed
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((collapsedItem) => {
                if (collapsedItem === null) {
                    return;
                }

                if (this._isChildrenOf(collapsedItem, this.item)) {
                    this.collapse();
                }
            });

        if (this.autoCollapse) {
            this._fuseVerticalNavigationComponent.onCollapsableItemExpanded
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe((expandedItem) => {
                    if (expandedItem === null) {
                        return;
                    }

                    if (this._isChildrenOf(this.item, expandedItem)) {
                        return;
                    }

                    if (this._hasActiveChild(this.item, this._router.url)) {
                        return;
                    }

                    // Check if this is the expanded item
                    if (this.item === expandedItem) {
                        return;
                    }

                    // If none of the above conditions are matched, collapse this item
                    this.collapse();
                });
        }

        // Attach a listener to the NavigationEnd event
        this._router.events
            .pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll),
            )
            .subscribe((event: NavigationEnd) => {
                // If the item has a children that has a matching url with the current url, expand...
                if (this._hasActiveChild(this.item, event.urlAfterRedirects)) {
                    this.expand();
                }
                // Otherwise...
                else {
                    // If the autoCollapse is on, collapse...
                    if (this.autoCollapse) {
                        this.collapse();
                    }
                }
            });

        // Subscribe to onRefreshed on the navigation component
        this._fuseVerticalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll),
        ).subscribe(() => {
            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * Check if the component has a given permission
     *
     * @param permission - An array of permission(s)
     * @returns A boolean indicating whether the component has the given permission or not
     */
    hasPermission(permission: string[]): boolean {
        // Check if the permission is defined and is an array
        if (!Array.isArray(permission) || !permission.length) {
            return false;
        }

        // Return the result of the hasPermission method of the FuseUtilsService
        // with the given permission as an argument
        return this.utilsService.hasPermission(permission[0]);
    }
    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Collapse
     */
    collapse(): void {
        // Return if the item is disabled
        if (this.item.disabled) {
            return;
        }

        // Return if the item is already collapsed
        if (this.isCollapsed) {
            return;
        }

        // Collapse it
        this.isCollapsed = true;
        this.isExpanded = !this.isCollapsed;

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Execute the observable
        this._fuseVerticalNavigationComponent.onCollapsableItemCollapsed.next(this.item);
    }

    /**
     * Expand
     */
    expand(): void {
        // Return if the item is disabled
        if (this.item.disabled) {
            return;
        }

        // Return if the item is already expanded
        if (!this.isCollapsed) {
            return;
        }

        // Expand it
        this.isCollapsed = false;
        this.isExpanded = !this.isCollapsed;

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Execute the observable
        this._fuseVerticalNavigationComponent.onCollapsableItemExpanded.next(this.item);
    }

    /**
     * Toggle collapsable
     */
    toggleCollapsable(): void {
        // Toggle collapse/expand
        if (this.isCollapsed) {
            this.expand();
        }
        else {
            this.collapse();
        }
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check if the given item has the given url
     * in one of its children
     *
     * @param item
     * @param currentUrl
     * @private
     */
    private _hasActiveChild(item: FuseNavigationItem, currentUrl: string): boolean {
        const children = item.children;

        if (!children) {
            return false;
        }

        for (const child of children) {
            if (child.children) {
                if (this._hasActiveChild(child, currentUrl)) {
                    return true;
                }
            }

            // Check if the child has a link and is active
            if (child.link && this._router.isActive(child.link, child.exactMatch || false)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Check if this is a children
     * of the given item
     *
     * @param parent
     * @param item
     * @private
     */
    private _isChildrenOf(parent: FuseNavigationItem, item: FuseNavigationItem): boolean {
        const children = parent.children;

        if (!children) {
            return false;
        }

        if (children.indexOf(item) > -1) {
            return true;
        }

        for (const child of children) {
            if (child.children) {
                if (this._isChildrenOf(child, item)) {
                    return true;
                }
            }
        }

        return false;
    }
}
