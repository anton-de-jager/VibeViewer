import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { VariableService } from 'app/services/variable.service';
import { Subject } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/models/user.model';
import { FuseSplashScreenService } from '@fuse/services/splash-screen';
import { ApiService } from 'app/services/api.service';
import { environment } from 'environments/environment';
import { Geolocation } from '@capacitor/geolocation';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogHistoryComponent } from 'app/controls/dialog-history/dialog-history.component';
import { DialogPromotionViewComponent } from 'app/controls/dialog-promotion-view/dialog-promotion-view.component';
import { Device } from '@capacitor/device';

const options: PositionOptions = {
    enableHighAccuracy: true,
    timeout: 25000,
    maximumAge: 0
};

@Component({
    selector: 'promotion',
    templateUrl: './promotion.component.html',
    encapsulation: ViewEncapsulation.None
})
export class PromotionComponent {
    content = '';
    title = '';
    urlImage = '';
    api = environment.api;
    id = '';
    list: any[] = [];

    constructor(
        public variableService: VariableService,
        private _userService: UserService,
        private _router: Router,
        private dialog: MatDialog,
        private route: ActivatedRoute,
        private apiService: ApiService,
        private _changeDetectorRef: ChangeDetectorRef,
        private fuseSplashScreenService: FuseSplashScreenService
    ) {
        this.fuseSplashScreenService.show();
        this.id = this._router.url.split('/').pop();
        this.getPromotions().then(getPromotionsResult => {
            this.list = getPromotionsResult;
            if (this.id !== 'all') {
                this.apiService.getItemParm('promotions', this.id).subscribe(promotion => {
                    if (promotion) {
                        this.title = promotion.title;
                        this.content = promotion.content;
                        this.urlImage = promotion.urlImage;
                        this.apiService.getItemParm('users', promotion.userId).subscribe(userResult => {
                            this.fuseSplashScreenService.hide();
                            this.openPromotion({ userId: promotion.userId, name: userResult.name, title: this.title, content: this.content, urlImage: this.urlImage, id: this.id, reviewImages: userResult.reviewImages, lat: userResult.lat, lon: userResult.lon });
                            setTimeout(() => {
                                _changeDetectorRef.detectChanges();
                                _changeDetectorRef.markForCheck();
                            }, 200);
                        })
                    } else {
                        this.fuseSplashScreenService.hide();
                    }
                });
            } else {
                this.fuseSplashScreenService.hide();
            }
        });
    }

    selectPromotion(item) {

    }

    openPromotion(item) {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.data = {
            userId: item.userId,
            name: item.name,
            lat: item.lat,
            lon: item.lon,
            title: item.title,
            content: item.content,
            urlImage: item.urlImage,
            id: item.id,
            images: item.reviewImages ? this.sortByDtateString(item.reviewImages.split(',')).map(image => environment.api + '/Images/Reviews/' + image.trim()) : []
        };

        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.ariaLabel = 'fffff';
        dialogConfig.width = "100vw";
        dialogConfig.maxWidth = "800px";
        dialogConfig.panelClass = 'full-screen-modal';

        const dialogRef = this.dialog.open(DialogPromotionViewComponent,
            dialogConfig);

        dialogRef.afterClosed().subscribe(result => { });
    }

    get currentYear(): number {
        return new Date().getFullYear();
    }

    getPromotions(): Promise<any[]> {
        var promise = new Promise<any[]>(async (resolve) => {
            try {
                if (Capacitor.getPlatform() !== 'web') {
                    const geolocationEnabled = await Geolocation.checkPermissions();

                    if (geolocationEnabled.location !== 'granted') {
                        const granted = await Geolocation.requestPermissions();

                        if (granted.location !== 'granted') {
                            resolve([]);
                        }
                    }
                }
                Geolocation.getCurrentPosition(options).then(res => {
                    Device.getId().then(id => {
                        this.apiService.getDevicePromotionsAll(id.uuid, res.coords.latitude, res.coords.longitude).subscribe(result => {
                            resolve(result);
                        });
                    });
                });
            } catch (exception) {
                resolve([]);
            }
        });
        return promise;
    }

    async viewLocation(lat, lon) {
        if (Capacitor.getPlatform() !== 'web') {
            const geolocationEnabled = await Geolocation.checkPermissions();

            if (geolocationEnabled.location !== 'granted') {
                const granted = await Geolocation.requestPermissions();

                if (granted.location !== 'granted') {
                    return;
                }
            }
        }
        Geolocation.getCurrentPosition(options).then(res => {
            let url = 'https://www.google.com/maps/dir/' + res.coords.latitude + ',' + res.coords.longitude + '/' + lat + ',' + lon + '/data=!3m1!4b1!4m2!4m1!3e0';
            Browser.open({ url });
        });
    }

    viewReviews(event, item) {
        if (item.reviewCount == 0) {
            event.preventDefault();
        } else {
            const dialogConfig = new MatDialogConfig();

            item.images = this.sortByDtateString(item.reviewImages.split(',')).map(image => environment.api + '/Images/Reviews/' + image.trim());

            dialogConfig.data = { item: item, list: this.sortByDtateString(item.images) };

            dialogConfig.autoFocus = true;
            dialogConfig.disableClose = true;
            dialogConfig.hasBackdrop = true;
            dialogConfig.ariaLabel = 'fffff';
            dialogConfig.width = "100vw";
            dialogConfig.maxWidth = "800px";
            dialogConfig.panelClass = 'full-screen-modal';

            const dialogRef = this.dialog.open(DialogHistoryComponent,
                dialogConfig);

            dialogRef.afterClosed().subscribe(result => { });
        }
    }

    sortByDtateString(list) {
        return list.sort((n2, n1) => Number(n1.substring(n1.indexOf('_') + 1).split('_')[0]) - Number(n2.substring(n2.indexOf('_') + 1).split('_')[0]));
    }

    goHome(): void {
        this._router.navigate(['home']);
    }

    navigateExternal(event: Event, url) {
        event.preventDefault();
        if (Capacitor.isNativePlatform) {
            Browser.open({ url });
        } else {
            window.open(url, '_blank');
        }
    }
}
