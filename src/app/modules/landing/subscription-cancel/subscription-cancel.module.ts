import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { SubscriptionCancelComponent } from 'app/modules/landing/subscription-cancel/subscription-cancel.component';
import { subscriptionCancelRoutes } from 'app/modules/landing/subscription-cancel/subscription-cancel.routing';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { UserModule } from 'app/layout/common/user/user.module';

@NgModule({
    declarations: [
        SubscriptionCancelComponent
    ],
    imports     : [
        RouterModule.forChild(subscriptionCancelRoutes),
        MatButtonModule,
        MatIconModule,
        FuseNavigationModule,
        UserModule,
        SharedModule
    ]
})
export class SubscriptionCancelModule
{
}
