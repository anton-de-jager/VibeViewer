import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RefreshComponent } from 'app/modules/landing/refresh/refresh.component';
import { refreshRoutes } from 'app/modules/landing/refresh/refresh.routing';
import { FuseNavigationModule } from '@fuse/components/navigation';

@NgModule({
    declarations: [
        RefreshComponent
    ],
    imports     : [
        RouterModule.forChild(refreshRoutes),
        MatButtonModule,
        MatIconModule,
        FuseNavigationModule
    ]
})
export class RefreshModule
{
}
