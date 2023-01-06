import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseAlertType } from '@fuse/components/alert';
import { User } from 'app/models/user.model';
import { ApiService } from 'app/services/api.service';
import { SharedService } from 'app/shared/shared.service';
import { VariableService } from 'app/services/variable.service';
import { UserService } from 'app/core/user/user.service';
import { EventEmitterService } from 'app/services/event-emitter.service';

@Component({
    selector: 'settings-security',
    templateUrl: './security.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsSecurityComponent implements OnInit {
    user: any;
    securityForm: UntypedFormGroup;
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;

    activated = false;

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _activatedRoute: ActivatedRoute,
        private _userService: UserService,
        private _formBuilder: UntypedFormBuilder,
        private apiService: ApiService,
        private sharedService: SharedService,
        private router: Router,
        private eventEmitterService: EventEmitterService
    ) {
        this.securityForm = this._formBuilder.group({
            passwordCurrent: [''],
            passwordNew: ['']
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._userService.get().subscribe(user => {
            this.user = user;
            this.eventEmitterService.onChangeUser(user);

            if (!this.user) {
                this.router.navigateByUrl('/sign-in');
            }
        }, error => {
            localStorage.removeItem('AT');
            localStorage.removeItem('RT');
            localStorage.removeItem('ID');

            const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/home';
            this.router.navigateByUrl(redirectURL);
        });
    }

    activate() {
        this.activated = true;
    }

    submit() {
        this.securityForm.disable();
        this.showAlert = false;
        let request = {
            id: this.user.id,
            passwordCurrent: this.securityForm.value.passwordCurrent,
            passwordNew: this.securityForm.value.passwordNew
        }
        this.apiService.changePassword(request).subscribe({
            next: data => {
                this.securityForm.enable();
                this.alert = {
                    type: 'success',
                    message: 'password Changed Successfully'
                };
                this.showAlert = true;
                this._changeDetectorRef.markForCheck();
            },
            error: err => {
                this.securityForm.enable();

                this.alert = {
                    type: 'error',
                    message: err.error
                };
                this.showAlert = true;
                this._changeDetectorRef.markForCheck();
            }
        });
    }
}
