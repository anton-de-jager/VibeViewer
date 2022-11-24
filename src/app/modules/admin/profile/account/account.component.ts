import { HttpEventType } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { FuseAlertType } from '@fuse/components/alert';
import { FuseSplashScreenService } from '@fuse/services/splash-screen';
import { DialogAddressComponent } from 'app/controls/dialog-address/dialog-address.component';
import { User } from 'app/models/user.model';
import { ApiService } from 'app/services/api.service';
import { SharedService } from 'app/shared/shared.service';
import { VariableService } from 'app/services/variable.service';
import { environment } from 'environments/environment';
import { UserService } from 'app/core/user/user.service';
import { EventEmitterService } from 'app/services/event-emitter.service';
import { Toast } from '@capacitor/toast';
import { upperCase } from 'lodash';

@Component({
    selector: 'settings-account',
    templateUrl: './account.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SettingsAccountComponent implements OnInit {
    //@ViewChild('accountNgForm') accountNgForm: NgForm;
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    accountForm: FormGroup;
    user: any;
    showAlert: boolean = false;
    previewImage: string = null;
    fileToUpload: any;
    userTypeList = [];
    location: any;
    submitClicked = false;
    imagesFolder = environment.api + '/Images/';
    loading = true;
    activated = false;

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _activatedRoute: ActivatedRoute,
        private _userService: UserService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private variableService: VariableService,
        private sharedService: SharedService,
        private apiService: ApiService,
        public fuseSplashScreenService: FuseSplashScreenService,
        private dialog: MatDialog,
        private router: Router,
        private eventEmitterService: EventEmitterService
    ) {
        this.fuseSplashScreenService.show();
        // this.accountForm = this._formBuilder.group({
        //     userTypeId: [''],
        //     name: [''],
        //     description: [''],
        //     lat: [''],
        //     lon: [''],
        //     address: [''],
        //     email:[''],
        //     paypalEmail: [''],
        //     phone: [''],
        //     web: [''],
        //     urlImage: [''],
        //     imageChanged: [false]
        // });

        this.getUserTypes().then(result => {            
            this.userTypeList = result.sort((a, b) => (a.order > b.order) ? 1 : -1);
            this._userService.get().subscribe(user => {
                this.user = user;
                if(upperCase(this.user.userTypeId) == upperCase('463af20d-e093-4ca0-9ac1-23909de39f9c')){
                    this.userTypeList = this.userTypeList.filter(x => upperCase(x.id) === upperCase('463af20d-e093-4ca0-9ac1-23909de39f9c'));
                }else{
                    this.userTypeList = this.userTypeList.filter(x => upperCase(x.id) !== upperCase('463af20d-e093-4ca0-9ac1-23909de39f9c'));
                }
                this.eventEmitterService.onChangeUser(user);
                if (!this.user) {
                    this.router.navigateByUrl('/sign-in');
                } else {
                    this.accountForm = this._formBuilder.group({
                        id: [this.user.id, Validators.required],
                        userTypeId: [this.user.userTypeId, Validators.required],
                        name: [this.user.name, Validators.required],
                        description: [this.user.description],
                        lat: [this.user.lat],
                        lon: [this.user.lon],
                        address: [this.user.address],
                        email: [this.user.email, [Validators.required, Validators.email]],
                        paypalEmail: [this.user.paypalEmail],
                        phone: [this.user.phone],
                        web: [this.user.web],
                        urlImage: [this.user.urlImage],
                        imageChanged: [false]
                    });
                    setTimeout(() => {
                        this._changeDetectorRef.markForCheck();
                        this.loading = false;
                        this.fuseSplashScreenService.hide();
                    }, 200);
                }

            }, error => {
                localStorage.removeItem('AT');
                localStorage.removeItem('RT');
                localStorage.removeItem('ID');

                const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/home';
                this._router.navigateByUrl(redirectURL);
            });
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
    }

    getUserTypes(): Promise<any[]> {
        var promise = new Promise<any[]>((resolve) => {
            try {
                this.apiService.getItem('userTypes').subscribe(result => {
                    resolve(result);
                });
            } catch (exception) {
                resolve([]);
            }
        });
        return promise;
    }

    venueTypeChanged(event) {
        if (upperCase(event.value) == upperCase('463af20d-e093-4ca0-9ac1-23909de39f9c')) {
            this.accountForm.get('name').clearValidators();
            this.accountForm.get('description').clearValidators();
            this.accountForm.get('address').clearValidators();
            this.accountForm.get('address').clearValidators();
        } else {
            this.accountForm.get('name').setValidators(Validators.required);
            this.accountForm.get('description').setValidators(Validators.required);
            this.accountForm.get('address').setValidators(Validators.required);
            this.accountForm.get('address').setValidators(Validators.required);
        }
    }

    getAddress() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = { label: 'Enter Address', address: this.accountForm.controls['address'].value, lat: this.accountForm.controls['lat'].value, lon: this.accountForm.controls['lon'].value };

        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.ariaLabel = 'fffff';
        dialogConfig.width = "100vw";
        dialogConfig.maxWidth = "800px";
        dialogConfig.panelClass = 'full-screen-modal';

        const dialogRef = this.dialog.open(DialogAddressComponent,
            dialogConfig);


        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.accountForm.controls['lat'].setValue(result.location.lat);
                this.accountForm.controls['lon'].setValue(result.location.lon);
                this.accountForm.controls['address'].setValue(result.address);
                this._changeDetectorRef.markForCheck();
            }
        });
    }

    activate() {
        this.activated = true;
    }

    save() {
        this.showAlert = false;
        this.submitClicked = true;
        // Do nothing if the form is invalid
        if (this.accountForm.invalid) {
            return;
        }

        // Disable the form
        this.accountForm.disable();

        this.apiService.updateUser(this.accountForm.value).subscribe({
            next: response => {
                console.log(this.fileToUpload);
                if (this.fileToUpload) {
                    console.log('in');
                    this.uploadFile(this.fileToUpload, response.id + '.' + this.fileToUpload.name.split('.').pop()).then(x => {
                        this.accountForm.enable();
                        response.urlImage = '.' + this.fileToUpload.name.split('.').pop();
                        this.alert = {
                            type: 'success',
                            message: 'Profile Saved Successfully'
                        };
                        this.showAlert = true;
                        Toast.show({
                            text: 'Profile Saved Successfully',
                          });
                    });
                } else {
                    this.accountForm.enable();
                    this.alert = {
                        type: 'success',
                        message: 'Profile Saved Successfully'
                    };
                    this.showAlert = true;
                    Toast.show({
                        text: 'Profile Saved Successfully',
                      });
                }
            },
            error: err => {
                // Re-enable the form
                this.accountForm.enable();

                // Reset the form
                //this.accountForm.reset();

                // Set the alert
                this.alert = {
                    type: 'error',
                    message: 'Something went wrong, please try again.'
                };

                // Show the alert
                this.showAlert = true;
                Toast.show({
                    text: 'Something went wrong, please try again',
                  });
            }
        });
    }

    async captureImage() {
        let options = {
            quality: 100,
            allowEditing: false,
            source: CameraSource.Prompt,
            resultType: CameraResultType.Base64,
            height: 1000
        }
        Camera.getPhoto(options).then(async (imageData) => {
            this.previewImage = `data:image/jpeg;base64,${imageData.base64String}`!;
            const resizedImage = await this.variableService.resizeImage({
                file: this.dataURLtoFile(`data:image/jpeg;base64,${imageData.base64String}`!),
                maxSize: 1000
            });
            this.fileToUpload = this.dataURLtoFile(resizedImage);
            this.accountForm.controls['imageChanged'].setValue(true);
            this._changeDetectorRef.markForCheck();
        }, (err) => {
            console.log(err);
        });
    }

    dataURLtoFile(dataurl) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], 'file.' + mime.replace('image/', ''), { type: mime });
    }

    uploadFile(fileToUpload, filename): Promise<boolean> {
        var promise = new Promise<boolean>((resolve) => {
            try {
                const formData = new FormData();
                formData.append('file', fileToUpload);
                this.apiService.upload('users', formData, filename).subscribe(event => {
                    if (event.type === HttpEventType.Response) {
                        resolve(true);
                    }
                })
            } catch (exception) {
                resolve(false);
            }
        });
        return promise;
    }

    cancel(){
        if(confirm('Are you sure you want to cancel subscription?')){
            this.apiService.cancelSubscription(this.accountForm.controls['id'].value).subscribe(res => {
                alert('Subscription will be cancel after this period');
            });
        }
    }
}
