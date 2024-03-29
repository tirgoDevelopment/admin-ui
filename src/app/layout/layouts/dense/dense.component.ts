import { NgIf } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { FuseFullscreenComponent } from '@fuse/components/fullscreen';
import { FuseLoadingBarComponent } from '@fuse/components/loading-bar';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { FuseConfig, FuseConfigService, Scheme } from '@fuse/services/config';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { AuthService } from 'app/core/auth/auth.service';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { Navigation } from 'app/core/navigation/navigation.types';
import { LanguagesComponent } from 'app/shared/components/common/languages/languages.component';
import { MessagesComponent } from 'app/shared/components/common/messages/messages.component';
import { NotificationsComponent } from 'app/shared/components/common/notifications/notifications.component';
import { SearchComponent } from 'app/shared/components/common/search/search.component';
import { UserComponent } from 'app/shared/components/common/user/user.component';

import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'dense-layout',
    templateUrl: './dense.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [FuseLoadingBarComponent, FuseVerticalNavigationComponent, MatButtonModule, MatIconModule, LanguagesComponent, FuseFullscreenComponent, SearchComponent, MessagesComponent, NotificationsComponent, UserComponent, NgIf, RouterOutlet],
})
export class DenseLayoutComponent implements OnInit, OnDestroy {
    @Input('isAthenticated') isAthenticated: boolean
    isScreenSmall: boolean;
    navigation: Navigation;
    navigationAppearance: 'default' | 'dense';
    scheme: 'dark' | 'light';
    config: FuseConfig;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    constructor(
        private _authService: AuthService,
        private _fuseConfigService: FuseConfigService,
        private _router: Router,
        private _navigationService: NavigationService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService) { }

    get currentYear(): number {
        return new Date().getFullYear();
    }

    ngOnInit(): void {
        this._navigationService.navigation$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((navigation: Navigation) => {
                this.navigation = navigation;
            });

        this._fuseConfigService.config$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config: FuseConfig) => {
                this.config = config;
            });


        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                this.isScreenSmall = !matchingAliases.includes('md');

                this.navigationAppearance = this.isScreenSmall ? 'default' : 'dense';
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    toggleNavigation(name: string): void {
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);
        if (navigation) {
            navigation.toggle();
        }
    }

    setScheme(scheme: Scheme): void {
        this._fuseConfigService.config = { scheme };
    }

    toggleNavigationAppearance(): void {
        this.navigationAppearance = (this.navigationAppearance === 'default' ? 'dense' : 'default');
    }

    signOut(): void {
        this._authService.signOut().subscribe(() => {

        })
        this._router.navigate(['/sign-out']);
    }
}