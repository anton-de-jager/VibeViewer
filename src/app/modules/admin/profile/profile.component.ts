import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/models/user.model';
import { SharedService } from 'app/shared/shared.service';
import { AuthService } from 'app/core/auth/auth.service';
import { VariableService } from 'app/services/variable.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen';
import { EventEmitterService } from 'app/services/event-emitter.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit, OnDestroy {
    @ViewChild('drawer') drawer: MatDrawer;
    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    panels: any[] = [];
    selectedPanel: string = 'account';
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    user: any;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private authService: AuthService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private sharedService: SharedService,
        private router: Router,
        private fuseSplashScreenService: FuseSplashScreenService,
        private variableService: VariableService,
        private eventEmitterService: EventEmitterService
    ) {
        this.fuseSplashScreenService.show();
        this.authService.getUserInfo().subscribe(
            {
              next: (data => {
                this.user = data;
                this.eventEmitterService.onChangeUser(this.user);
                this._changeDetectorRef.markForCheck();

                if (!this.user) {
                    localStorage.removeItem('AT');
                    localStorage.removeItem('RT');
                    localStorage.removeItem('ID');
                    this.router.navigateByUrl('/sign-in');
                }
                this.eventEmitterService.onChangePage('profile');
              }),
              error: (() => {
                localStorage.removeItem('AT');
                localStorage.removeItem('RT');
                localStorage.removeItem('ID');

                const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/home';
                this._router.navigateByUrl(redirectURL);
              })
            }
       
          );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Setup available panels
        this.panels = [
            {
                id: 'account',
                icon: 'heroicons_outline:user-circle',
                title: 'Account',
                description: 'Manage your public profile and private information'
            },
            {
                id: 'security',
                icon: 'heroicons_outline:lock-closed',
                title: 'Security',
                description: 'Manage your password and 2-step verification preferences'
            }
        ];
        this.fuseSplashScreenService.hide();

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {

                // Set the drawerMode and drawerOpened
                if (matchingAliases.includes('lg')) {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                }
                else {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
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
     * Navigate to the panel
     *
     * @param panel
     */
    goToPanel(panel: string): void {
        this.selectedPanel = panel;

        // Close the drawer on 'over' mode
        if (this.drawerMode === 'over') {
            this.drawer.close();
        }
    }

    /**
     * Get the details of the panel
     *
     * @param id
     */
    getPanelInfo(id: string): any {
        return this.panels.find(panel => panel.id === id);
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

    menuClicked(str) {
        this._router.navigate([str]);
    }
}
