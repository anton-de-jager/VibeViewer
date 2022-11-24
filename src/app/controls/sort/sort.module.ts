import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { SortComponent } from 'app/controls/sort/sort.component';
import { MatSliderModule } from '@angular/material/slider'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

const sortRoutes: Route[] = [
    {
        path: '',
        component: SortComponent
    }
];

@NgModule({
    declarations: [
        SortComponent
    ],
    imports: [
        FuseDrawerModule,
        MatSliderModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatCardModule,
        MatIconModule,
        MatBottomSheetModule,
        MatListModule,
        MatSidenavModule,
        RouterModule.forChild(sortRoutes)
    ],
    exports:[
        MatListModule,
        MatSidenavModule
    ]
})
export class SortModule {
}
