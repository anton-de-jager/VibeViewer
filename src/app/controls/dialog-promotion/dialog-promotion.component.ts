import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { ApiService } from 'app/services/api.service';
import { VariableService } from 'app/services/variable.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { User } from 'app/models/user.model';
import { Geolocation } from '@capacitor/geolocation';
import { environment } from 'environments/environment';
import { Promotion } from 'app/models/promotion.model';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

const options: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 25000,
  maximumAge: 0
};

@Component({
  selector: 'app-promotion',
  templateUrl: './dialog-promotion.component.html',
  styleUrls: ['./dialog-promotion.component.scss']
})
export class DialogPromotionComponent implements OnInit, AfterViewInit {
  image: string = null;
  fileToUpload: any;
  form: FormGroup;
  userItems: User[];
  promotionList: Promotion[];
  showSubmit = false;
  minDate: Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogPromotionComponent>,
    private variableService: VariableService,
    private apiService: ApiService,
    private formBuilder: FormBuilder) {
    this.form = this.data.form;
    this.promotionList = this.data.promotionList;
    this.minDate = new Date();

    if (data) {
    }
    // this.getUsersFilter().then(getUsersFilterResult => {
    //   this.userItems = getUsersFilterResult;
    //   if (getUsersFilterResult.length > 0) {
    //     this.form.controls['userId'].setValue(getUsersFilterResult[0].id);
    //   }
    // })
  }

  ngOnInit(): void {
    this.initConfig();
  }

  filterUsedDates = (d: Date): boolean => {
    const time = new Date(d).getTime();
    return !this.promotionList.find(x => new Date(x.promotionDate).getTime() == time);
  }

  getWeekNumber(d: Date) {
    const today = new Date(d);
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today.valueOf() - firstDayOfYear.valueOf()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.showSubmit = false;
    this.promotionList.forEach(element => {
      if (this.getWeekNumber(element.promotionDate) == this.getWeekNumber(event.value)) {
        this.showSubmit = true;
      }
    });
  }

  // getUsersFilter(): Promise<any[]> {
  //   var promise = new Promise<any[]>((resolve) => {
  //     try {
  //       Geolocation.getCurrentPosition(options).then(res => {
  //         this.apiService.getUsersFilter(100, res.coords.latitude, res.coords.longitude).subscribe(result => {
  //           resolve(result);
  //         });
  //       });
  //     } catch (exception) {
  //       resolve([]);
  //     }
  //   });
  //   return promise;
  // }

  ngAfterViewInit(): void {
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
      this.image = `data:image/jpeg;base64,${imageData.base64String}`!;
      const resizedImage = await this.variableService.resizeImage({
        file: this.dataURLtoFile(`data:image/jpeg;base64,${imageData.base64String}`!),
        maxSize: 1000
      });
      this.fileToUpload = this.dataURLtoFile(resizedImage);
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

  private initConfig(): void {
    // setTimeout(() => {
    //   this.payPalConfig = {
    //     currency: 'USD',
    //     clientId: environment.paypalClientId,
    //     //fundingSource: 'CARD',                
    //     createOrderOnClient: (data) => <ICreateOrderRequest>{
    //       intent: 'CAPTURE',
    //       purchase_units: [
    //         {
    //           amount: {
    //             currency_code: 'USD',
    //             value: '5',
    //             breakdown: {
    //               item_total: {
    //                 currency_code: 'USD',
    //                 value: '5'
    //               }
    //             }
    //           },
    //           items: [
    //             {
    //               name: 'Vibe Viewer Promotion',
    //               quantity: '1',
    //               category: 'DIGITAL_GOODS',
    //               unit_amount: {
    //                 currency_code: 'USD',
    //                 value: '5',
    //               },
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     advanced: {
    //       commit: 'true'
    //     },
    //     style: {
    //       label: 'paypal',
    //       layout: 'vertical',
    //       shape: 'pill'
    //     },
    //     onApprove: (data, actions) => {
    //       console.log('onApprove - transaction was approved, but not authorized', data, actions);
    //       this.form.controls['urlImage'].setValue(this.image);
    //       this.form.controls['fileToUpload'].setValue(this.fileToUpload);
    //       setTimeout(() => {
    //         this.dialogRef.close(this.form.value);
    //       }, 200);
    //     },
    //     onClientAuthorization: (data) => {
    //       console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
    //     },
    //     onCancel: (data, actions) => {
    //       console.log('OnCancel', data, actions);
    //     },
    //     onError: err => {
    //       console.log('OnError', err);
    //     },
    //     onClick: (data, actions) => {
    //       console.log('onClick', data, actions);
    //     },
    //   };
    // }, 2000);
  }

  cancel(): void {
    this.dialogRef.close(null);
    // this.form.controls['urlImage'].setValue(this.image);
    // this.form.controls['fileToUpload'].setValue(this.fileToUpload);
    // setTimeout(() => {
    //   this.dialogRef.close(this.form.value);
    // }, 200);
  }
  submit(): void {
    if (!this.showSubmit) {
      let proceed = true;
      if (!this.form.controls['userId'].value || !this.image || !this.fileToUpload || !this.form.valid) {
        proceed = false;
      }
      if (proceed) {
        this.form.controls['urlImage'].setValue(this.image);
        this.form.controls['fileToUpload'].setValue(this.fileToUpload);
        this.dialogRef.close(this.form.value);
      }
    } else {

    }
  }
}
