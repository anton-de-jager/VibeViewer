import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { Promotion } from 'app/models/promotion.model';
import { User } from 'app/models/user.model';
import { ApiService } from 'app/services/api.service';
import { VariableService } from 'app/services/variable.service';
import { environment } from 'environments/environment';
import { Guid } from 'guid-typescript';
import { DialogPromotionComponent } from 'app/controls/dialog-promotion/dialog-promotion.component';
import { SharedService } from 'app/shared/shared.service';
import { UserService } from 'app/core/user/user.service';
import { EventEmitterService } from 'app/services/event-emitter.service';
import { Capacitor } from '@capacitor/core';
import { DialogNotificationComponent } from 'app/controls/dialog-notification/dialog-notification.component';

@Component({
    selector: 'promotions',
    templateUrl: './promotions.component.html',
    encapsulation: ViewEncapsulation.None
})
export class PromotionsComponent implements OnInit {
    timestamp: number = 0;
    imagesFolder = environment.api + '/Images/';
    loading: boolean = true;
    form: FormGroup;
    promotionList: Promotion[] = [];
    user: any;
    api = environment.api;

    displayedColumns: string[];
    dataSource: MatTableDataSource<Promotion>;
    @ViewChild(MatPaginator, { static: false }) paginatorPromotion: MatPaginator;
    @ViewChild(MatSort, { static: false }) sortPromotion: MatSort;

    theFile: any = null;
    messages: string[] = [];

    deleteForm: FormGroup;

    trial = false;
    daysLeft = '0';

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _userService: UserService,
        private dialog: MatDialog,
        private _formBuilder: FormBuilder,
        private apiService: ApiService,
        private _snackBar: MatSnackBar,
        public variableService: VariableService,
        private sharedService: SharedService,
        private _router: Router,
        private fuseConfirmationService: FuseConfirmationService,
        private router: Router,
        private eventEmitterService: EventEmitterService
    ) {
        this.loading = true;
        this._userService.get().subscribe(user => {
            this.user = user;
            this.eventEmitterService.onChangeUser(user);
            if (!this.user) {
                localStorage.removeItem('AT');
                localStorage.removeItem('RT');
                localStorage.removeItem('ID');
                this.router.navigateByUrl('/sign-in');
            } else {
                // var Difference_In_Time = new Date().getTime() - new Date(this.user.ts).getTime();
                // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                // if (Guid.parse(this.user.statusId).toString() !== Guid.parse('8225b68c-0691-4cb7-aff2-5efe9866f434').toString() && Difference_In_Days > 14) {
                //     this.router.navigateByUrl('/subscription');
                // } else {
                //     if (Guid.parse(this.user.statusId).toString() !== Guid.parse('8225b68c-0691-4cb7-aff2-5efe9866f434').toString() && Difference_In_Days <= 14) {
                //         this.trial = true;
                //         this.daysLeft = (14 - Difference_In_Days).toFixed(0);
                //     }
                    this.timestamp = new Date().getTime();
                    if (Capacitor.getPlatform() !== 'web') {
                        this.displayedColumns = ['title', 'promotionDate', 'countRead', 'cud'];
                    } else {
                        this.displayedColumns = ['title', 'promotionDate', 'countRead', 'image', 'cud'];
                    }
                    this.getPromotions().then(getPromotionResult => {
                        this.promotionList = getPromotionResult.sort((objA, objB) => new Date(objB.promotionDate).getTime() - new Date(objA.promotionDate).getTime());
                        this.dataSource = new MatTableDataSource(this.promotionList);
                        this.dataSource.paginator = this.paginatorPromotion;
                        this.dataSource.sort = this.sortPromotion;
                        this.loading = false;
                    });
                //}
            }
            this.eventEmitterService.onChangePage('promotions');
        }, error => {
            localStorage.removeItem('AT');
            localStorage.removeItem('RT');
            localStorage.removeItem('ID');

            const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/home';
            this._router.navigateByUrl(redirectURL);
        });
    }

    ngOnInit(): void {
    }

    imageClick(url) {
        console.log(url);
    }

    getPromotions(): Promise<any[]> {
        var promise = new Promise<any[]>((resolve) => {
            try {
                this.apiService.getItemsByUserId('promotions', this.user.id).subscribe(result => {
                    resolve(result);
                });
            } catch (exception) {
                console.log(exception);
                resolve([]);
            }
        });
        return promise;
    }

    subscribe(){
        this.apiService.submitSubscription(this.user.id).subscribe(result => {
            const dialogConfig = new MatDialogConfig();
            
            dialogConfig.data = { title: 'Email Sent', body: 'A subscription link has been sent to <b>' + this.user.email + '</b>' };

            dialogConfig.autoFocus = true;
            dialogConfig.disableClose = true;
            dialogConfig.hasBackdrop = true;
            dialogConfig.ariaLabel = 'fffff';
            dialogConfig.width = "100vw";
            dialogConfig.maxWidth = "800px";
            dialogConfig.panelClass = 'full-screen-modal';

            const dialogRef = this.dialog.open(DialogNotificationComponent,
                dialogConfig);
        });
    }

    // getPromotions(): Promise<Promotion[]> {
    //     var promise = new Promise<Promotion[]>((resolve) => {
    //         try {
    //             this.apiService.getItemsByUserId('promotions', this.user.id).subscribe({
    //                 next: (apiResult: any) => {
    //                     console.log(apiResult);
    //                     this.promotionList = apiResult;
    //                     this.dataSource = new MatTableDataSource(this.promotionList);
    //                     resolve(apiResult);
    //                 },
    //                 error: (error) => {
    //                     console.log(error);
    //                     this._snackBar.open('Error: ' + error, null, { duration: 2000 });
    //                     this.loading = false;
    //                 },
    //                 complete: () => {
    //                     //console.log('Done');
    //                 }
    //             });
    //         } catch (exception) {
    //             resolve([]);
    //         }
    //     });
    //     return promise;
    // }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }


    menuClicked(str) {
        this._router.navigate([str]);
    }

    initUpsert(row) {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var hour = d.getHours();
        var c = new Date(year, month, day, hour, 0, 0);

        this.form = this._formBuilder.group({
            id: [Guid.create().toString()],
            userId: [this.user.id],
            title: [null, Validators.required],
            content: [null, Validators.required],
            urlImage: [null],
            promotionDate: [null, Validators.required],
            fileToUpload: [null],
            statusId: ['bd06cbae-1471-47db-9c2f-dfab61f8378f']
        });

        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = {
            promotionList: this.promotionList,
            item: row,
            form: this.form,
            title: row == null ? 'Insert' : 'Update'
        }

        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.ariaLabel = 'fffff';
        dialogConfig.width = "100vw";
        dialogConfig.maxWidth = "800px";
        dialogConfig.panelClass = 'full-screen-modal';

        const dialogRef = this.dialog.open(DialogPromotionComponent,
            dialogConfig);


        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.loading = true;
                let todayNumber: number = Date.now();
                result.urlImage = result.fileToUpload.name.split('.').pop();
                let fileToUpload = <File>result.fileToUpload;
                const formData = new FormData();
                formData.append('file', fileToUpload, result.urlImage);

                this.apiService.uploadPromotion(result.id, formData, result.urlImage)
                    .subscribe({
                        next: (event) => {
                            if (event.type === HttpEventType.UploadProgress)
                                console.log(Math.round(100 * event.loaded / event.total));
                            else if (event.type === HttpEventType.Response) {
                                this.apiService.saveItem('promotions', result).subscribe({
                                    next: response => {
                                        this.getPromotions().then(getPromotionResult => {
                                            this.promotionList = getPromotionResult.sort((objA, objB) => new Date(objB.promotionDate).getTime() - new Date(objA.promotionDate).getTime());
                                            this.dataSource = new MatTableDataSource(this.promotionList);
                                            this.dataSource.paginator = this.paginatorPromotion;
                                            this.dataSource.sort = this.sortPromotion;
                                            this.loading = false;
                                        });
                                    },
                                    error: err => {
                                        alert(JSON.stringify(err));
                                    }
                                });
                            }
                        },
                        error: (err: HttpErrorResponse) => {
                            alert(JSON.stringify(err));
                        }
                    });
            } else {
                this.loading = false;
            }
        });
    }
}
