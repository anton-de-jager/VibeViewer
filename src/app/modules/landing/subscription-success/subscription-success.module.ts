import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { SubscriptionSuccessComponent } from 'app/modules/landing/subscription-success/subscription-success.component';
import { subscriptionSuccessRoutes } from 'app/modules/landing/subscription-success/subscription-success.routing';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { UserModule } from 'app/layout/common/user/user.module';

@NgModule({
    declarations: [
        SubscriptionSuccessComponent
    ],
    imports     : [
        RouterModule.forChild(subscriptionSuccessRoutes),
        MatButtonModule,
        MatIconModule,
        FuseNavigationModule,
        UserModule,
        SharedModule
    ]
})
export class SubscriptionSuccessModule
{
}
