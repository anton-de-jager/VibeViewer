import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SubscriptionComponent } from 'app/modules/admin/subscription/subscription.component';
import { SharedModule } from 'app/shared/shared.module';

const subscriptionRoutes: Route[] = [
    {
        path: '',
        component: SubscriptionComponent
    }
];

@NgModule({
    declarations: [
        SubscriptionComponent
    ],
    imports: [
        RouterModule.forChild(subscriptionRoutes),
        SharedModule
    ],
    entryComponents:[
    ]
})
export class SubscriptionModule {
}
