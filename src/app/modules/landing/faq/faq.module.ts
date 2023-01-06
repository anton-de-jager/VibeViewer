import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { FaqComponent } from 'app/modules/landing/faq/faq.component';
import { faqRoutes } from 'app/modules/landing/faq/faq.routing';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { UserModule } from 'app/layout/common/user/user.module';

@NgModule({
    declarations: [
        FaqComponent
    ],
    imports     : [
        RouterModule.forChild(faqRoutes),
        MatButtonModule,
        MatIconModule,
        FuseNavigationModule,
        UserModule,
        SharedModule
    ]
})
export class FaqModule
{
}
