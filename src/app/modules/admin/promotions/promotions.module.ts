import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PromotionsComponent } from 'app/modules/admin/promotions/promotions.component';
import { SharedModule } from 'app/shared/shared.module';

const promotionsRoutes: Route[] = [
    {
        path: '',
        component: PromotionsComponent
    }
];

@NgModule({
    declarations: [
        PromotionsComponent
    ],
    imports: [
        RouterModule.forChild(promotionsRoutes),
        SharedModule
    ]
})
export class PromotionsModule {
}
