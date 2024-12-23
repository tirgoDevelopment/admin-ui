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
import { TranslocoModule } from '@ngneat/transloco';
import { AuthService } from 'app/core/auth/auth.service';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { Navigation } from 'app/core/navigation/navigation.types';
import { AdminsService } from 'app/modules/admins/services/admins.service';
import { LanguagesComponent } from 'app/shared/components/common/languages/languages.component';
import { MessageComponent } from 'app/shared/components/message/message.component';
import { NotificationsComponent } from 'app/shared/components/common/notifications/notifications.component';
import { SearchComponent } from 'app/shared/components/common/search/search.component';
import { UserComponent } from 'app/shared/components/common/user/user.component';
import { jwtDecode } from 'jwt-decode';
import { Subject, takeUntil } from 'rxjs';
import { AgentService } from 'app/modules/agents/services/agent.service';

@Component({
    selector: 'dense-layout',
    templateUrl: './dense.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [FuseLoadingBarComponent, TranslocoModule, FuseVerticalNavigationComponent, MatButtonModule, MatIconModule, LanguagesComponent, FuseFullscreenComponent, SearchComponent, MessageComponent, NotificationsComponent, UserComponent, NgIf, RouterOutlet],
})
export class DenseLayoutComponent implements OnInit, OnDestroy {
    @Input('isAthenticated') isAthenticated: boolean
    isScreenSmall: boolean;
    navigation: Navigation;
    navigationAppearance: 'default' | 'dense';
    scheme: 'dark' | 'light';
    config: FuseConfig;
    user: any;
    staff: any;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    constructor(
        private _adminService: AdminsService,
        private _agentService: AgentService,
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
        this.user = this._authService.accessToken ? jwtDecode(this._authService.accessToken) : null;
        if (this.user?.userType != 'agent') {
            this._adminService.get(this.user.sub).subscribe(res => {
                this.staff = res.data
            })
        } else {
            this._agentService.get(this.user.sub).subscribe(res => {
                this.staff = res.data
            })
        }
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
        this._fuseConfigService.config = { 'scheme': 'light' };
        this._authService.signOut().subscribe(() => {

        })
        this._router.navigate(['/sign-out']);
    }
}