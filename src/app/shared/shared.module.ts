// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { FuseDrawerModule } from '@fuse/components/drawer';
// import { MatListModule } from '@angular/material/list';
// import { MatSelectModule } from '@angular/material/select';
// import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatIconModule } from '@angular/material/icon';
// import { FuseCardModule } from '@fuse/components/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatSliderModule } from '@angular/material/slider';
// import { NgxImageSwiperModule } from 'ngx-image-swiper';
// import { MatInputModule } from '@angular/material/input';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { FuseAlertModule } from '@fuse/components/alert';
// import { StarRatingComponent } from 'app/controls/star-rating/star-rating.component';
// import { MapComponent } from 'app/controls/map/map.component';
// import { SortComponent } from 'app/controls/sort/sort.component';
// import { DialogAddressComponent } from 'app/controls/dialog-address/dialog-address.component';
import { DialogEmailComponent } from 'app/controls/dialog-email/dialog-email.component';
// import { DialogGalleryComponent } from 'app/controls/dialog-gallery/dialog-gallery.component';
// import { DialogReviewComponent } from 'app/controls/dialog-review/dialog-review.component';
// import { DialogMapComponent } from 'app/controls/dialog-map/dialog-map.component';
// import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogNotificationComponent } from 'app/controls/dialog-notification/dialog-notification.component';
// import { DialogHistoryComponent } from 'app/controls/dialog-history/dialog-history.component';
// import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
// import { DialogPromotionComponent } from 'app/controls/dialog-promotion/dialog-promotion.component';
// import { DialogPromotionViewComponent } from 'app/controls/dialog-promotion-view/dialog-promotion-view.component';
// import { MatTableModule } from '@angular/material/table';
// import {
//     NgxMatDatetimePickerModule,
//     NgxMatNativeDateModule,
//     NgxMatTimepickerModule
// } from '@angular-material-components/datetime-picker';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
// import { TranslocoModule } from '@ngneat/transloco';
// import { DialogTermsComponent } from 'app/controls/dialog-terms/dialog-terms.component';
// import { DialogQrCodeComponent } from 'app/controls/dialog-qr-code/dialog-qr-code.component';
import { DialogAppCodeComponent } from 'app/controls/dialog-app-code/dialog-app-code.component';
// import { QRCodeModule } from 'angularx-qrcode';
// import { NgxPayPalModule } from 'ngx-paypal';
// import { StarRatingModule } from 'angular-star-rating';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { NgxImageSwiperModule } from 'ngx-image-swiper';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { FuseAlertModule } from '@fuse/components/alert';
import { NgxPayPalModule } from 'ngx-paypal';
import { StarRatingComponent } from 'app/controls/star-rating/star-rating.component';
import { MapComponent } from 'app/controls/map/map.component';
import { SortComponent } from 'app/controls/sort/sort.component';
import { DialogAddressComponent } from 'app/controls/dialog-address/dialog-address.component';
import { DialogGalleryComponent } from 'app/controls/dialog-gallery/dialog-gallery.component';
import { StarRatingModule } from 'angular-star-rating';
import { DialogReviewComponent } from 'app/controls/dialog-review/dialog-review.component';
import { DialogMapComponent } from 'app/controls/dialog-map/dialog-map.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogHistoryComponent } from 'app/controls/dialog-history/dialog-history.component';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { DialogPromotionComponent } from 'app/controls/dialog-promotion/dialog-promotion.component';
import { DialogPromotionViewComponent } from 'app/controls/dialog-promotion-view/dialog-promotion-view.component';
import { MatTableModule } from '@angular/material/table';
import {
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { TranslocoModule } from '@ngneat/transloco';
import { DialogTermsComponent } from 'app/controls/dialog-terms/dialog-terms.component';
import { DialogQrCodeComponent } from 'app/controls/dialog-qr-code/dialog-qr-code.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatSnackBarModule,
        FuseDrawerModule,
        MatListModule,
        MatBottomSheetModule,
        MatMenuModule,
        MatListModule,
        MatIconModule,
        FuseCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSliderModule,
        NgxImageSwiperModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseAlertModule,
        MatSelectModule,
        MatSidenavModule,
        MatExpansionModule,
        MatPaginatorModule,
        FuseScrollbarModule,
        MatRadioModule,
        MatSlideToggleModule,
        FuseAlertModule,
        MatTableModule,
        MatDatepickerModule,
        MatMomentDateModule,
        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
        TranslocoModule,
        QRCodeModule,
        NgxPayPalModule,
        StarRatingModule.forRoot()
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatSnackBarModule,
        FuseDrawerModule,
        MatListModule,
        MatBottomSheetModule,
        MatMenuModule,
        MatListModule,
        MatIconModule,
        FuseCardModule,
        MatSidenavModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSliderModule,
        NgxImageSwiperModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseAlertModule,
        MatSelectModule,
        MatPaginatorModule,
        FuseScrollbarModule,
        MatRadioModule,
        MatSlideToggleModule,
        FuseAlertModule,
        MatTableModule,
        MatDatepickerModule,
        MatMomentDateModule,
        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
        TranslocoModule,
        QRCodeModule,
        NgxPayPalModule,
        StarRatingModule
    ],
    declarations: [
        StarRatingComponent,
        MapComponent,
        SortComponent,
        DialogAddressComponent,
        DialogEmailComponent,
        DialogGalleryComponent,
        DialogReviewComponent,
        DialogPromotionComponent,
        DialogPromotionViewComponent,
        DialogTermsComponent,
        DialogMapComponent,
        DialogHistoryComponent,
        DialogNotificationComponent,
        DialogQrCodeComponent,
        DialogAppCodeComponent
    ],
    entryComponents: [
        SortComponent
    ]
})
export class SharedModule {
}
