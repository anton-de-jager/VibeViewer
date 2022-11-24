import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { VariableService } from 'app/services/variable.service';
import { Subject } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
import { UserService } from 'app/core/user/user.service';
import { EventEmitterService } from 'app/services/event-emitter.service';
import { User } from 'app/models/user.model';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

@Component({
    selector: 'subscription-success',
    templateUrl: './subscription-success.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SubscriptionSuccessComponent {
    isScreenSmall: boolean;
    native: string = '';
    user: User;

    constructor(
        public variableService: VariableService,
        private _router: Router,
        private _userService: UserService,
        private eventEmitterService: EventEmitterService,
        private payPal: PayPal
    ) {
        this.native = Capacitor.isNativePlatform() ? 'White' : '';
        this._userService.get().subscribe(user => {
            this.user = user;
            this.eventEmitterService.onChangeUser(user);
            if (!this.user) {
                localStorage.removeItem('AT');
                localStorage.removeItem('RT');
                localStorage.removeItem('ID');
                this._router.navigateByUrl('/sign-in');
            }
        });
    }

    get currentYear(): number {
        return new Date().getFullYear();
    }

    navigateExternal(event: Event, url) {
        event.preventDefault();
        if (Capacitor.isNativePlatform) {
            Browser.open({ url });
        } else {
            window.open(url, '_blank');
        }
    }

    goHome(): void {
        this._router.navigate(['home']);
    }
}
