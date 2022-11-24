import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { PromotionComponent } from 'app/modules/landing/promotion/promotion.component';
import { promotionRoutes } from 'app/modules/landing/promotion/promotion.routing';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { UserModule } from 'app/layout/common/user/user.module';

@NgModule({
    declarations: [
        PromotionComponent
    ],
    imports     : [
        RouterModule.forChild(promotionRoutes),
        MatButtonModule,
        MatIconModule,
        FuseNavigationModule,
        UserModule,
        SharedModule
    ]
})
export class PromotionModule
{
}
