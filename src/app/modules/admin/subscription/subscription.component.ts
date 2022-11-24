import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'app/shared/shared.service';
import { VariableService } from 'app/services/variable.service';
import { IPayPalConfig, ICreateOrderRequest, ICreateSubscriptionRequest, NgxPaypalComponent, PayPalScriptService } from 'ngx-paypal';
import { UserService } from 'app/core/user/user.service';
import { UserService as UserServiceApp } from 'app/services/user.service';
import { EventEmitterService } from 'app/services/event-emitter.service';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { ApiService } from 'app/services/api.service';
import { environment } from 'environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Md5 } from 'ts-md5';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogNotificationComponent } from 'app/controls/dialog-notification/dialog-notification.component';

@Component({
    selector: 'subscription',
    templateUrl: './subscription.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SubscriptionComponent implements OnInit, AfterViewInit {
    user: any;
    planId = '';
    public payPalConfig?: IPayPalConfig;
    loading = true;

    paymentAmount: string = '19.80';
    currency: string = 'USD';
    currencyIcon: string = '$';

    form: FormGroup;
    minDate: Date;
    maxDate: Date;
    diff = 0;

    htmlForm = '';

    plans = [
        { days: -1, planId: 'P-1K5407762U2173306MNR3Q5Y' },
        { days: 0, planId: 'P-83N86231GP6587744MNBZB3A' },
        { days: 1, planId: 'P-3SF73423331654634MNVVJ3I' },
        { days: 2, planId: 'P-8VT64768BR920974VMNVUFGQ' },
        { days: 3, planId: 'P-9LF91819CX3489048MNVUZ7A' },
        { days: 4, planId: 'P-57W97311A1220733SMNVU2LI' },
        { days: 5, planId: 'P-4PM82844110085344MNVU2YQ' },
        { days: 6, planId: 'P-6DX963510L621991YMNVU3EA' },
        { days: 7, planId: 'P-8JP843866E437883CMNVU3QA' },
        { days: 8, planId: 'P-76L33439CJ347800MMNVU33Y' },
        { days: 9, planId: 'P-6HE13823GS986644HMNVU4FY' },
        { days: 10, planId: 'P-2RD29903B9173910FMNVU4QY' },
        { days: 11, planId: 'P-3U018777TX070930DMNVU42Y' },
        { days: 12, planId: 'P-4A205622W7428761EMNVU5HQ' },
        { days: 13, planId: 'P-3PF697466Y197152WMNVU5TQ' },
        { days: 14, planId: 'P-10G678088X463002LMNVU56Q' },
        { days: 15, planId: 'P-0CR69401XL344871RMNVU6JI' },
        { days: 16, planId: 'P-22S06318UY4993327MNVU6YQ' },
        { days: 17, planId: 'P-8JX22760VL5215841MNVU7EA' },
        { days: 18, planId: 'P-59L376033J481960GMNVU7QA' },
        { days: 19, planId: 'P-3GC212464H532413NMNVU74I' },
        { days: 20, planId: 'P-2BE94003JS8095258MNVVAIY' },
        { days: 21, planId: 'P-09L14851NT6619348MNVVAUA' },
        { days: 22, planId: 'P-8Y842349JE584524PMNVVBAQ' },
        { days: 23, planId: 'P-6BN95877PK247162LMNVVBLY' },
        { days: 24, planId: 'P-6TA11853NL2768615MNVVBWI' },
        { days: 25, planId: 'P-7WM17978WB5266911MNVVCCQ' },
        { days: 26, planId: 'P-4J1094991X7807925MNVVCQA' },
        { days: 27, planId: 'P-2FD39085WC119932BMNVVC3Y' },
        { days: 28, planId: 'P-2DG340408P825574LMNVVDHI' },
        { days: 29, planId: 'P-7KD64724WC579863LMNVVDVY' },
        { days: 30, planId: 'P-1LN556972X7687914MNVVECI' }
    ]

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _activatedRoute: ActivatedRoute,
        private _userService: UserService,
        private userService: UserServiceApp,
        public variableService: VariableService,
        private sharedService: SharedService,
        private apiService: ApiService,
        private router: Router,
        private eventEmitterService: EventEmitterService,
        private _formBuilder: FormBuilder,
        private dialog: MatDialog,
        private payPal: PayPal,
        private payPalScriptService: PayPalScriptService
    ) {
        // const date = new Date();
        // this.minDate = new Date();
        // this.maxDate = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
        // this.maxDate.setTime(this.maxDate.getTime() - (24 * 60 * 60 * 1000));
        // this.form = this._formBuilder.group({
        //     debitDate: [new Date()]
        // });

        //this.plans = plans;
        setTimeout(() => {
            this.eventEmitterService.onChangePage('subscription');
        }, 500);
    }

    ngOnInit(): void {
        //this.initConfig();
        this._userService.get().subscribe(user => {
            this.user = user;
            // this.planId = this.user.code == environment.paypalFreeCode ? environment.paypalPlanIdFree : environment.paypalPlanId;
            // this.eventEmitterService.onChangeUser(user);

            // this.createButtons();

            // //this.buildForm();

            if (!this.user) {
                localStorage.removeItem('AT');
                localStorage.removeItem('RT');
                localStorage.removeItem('ID');
                this.router.navigateByUrl('/sign-in');
            }
        }, error => {
            localStorage.removeItem('AT');
            localStorage.removeItem('RT');
            localStorage.removeItem('ID');

            const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/home';
            this.router.navigateByUrl(redirectURL);
        });
    }

    days = (date_1, date_2) => {
        let difference = date_1.getTime() - date_2.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    }

    dateChanged(event) {
        this.diff = (this.days(new Date(event.value), new Date()));
        this.createButtons();
    }

    createButtons() {
        this.loading = true;
        this.payPalConfig = {
            currency: 'USD',
            clientId: environment.paypalClientId,
            vault: "true",
            intent: "subscription",
            //fundingSource: 'CARD',
            createSubscriptionOnClient: (data) => <ICreateSubscriptionRequest>{
                plan_id: this.plans.find(x => x.days == this.diff).planId,// 'P-8VT64768BR920974VMNVUFGQ',//this.planId,
                custom_id: this.user.id.toString()
            },
            advanced: {
                commit: 'true',
                //locale: 'US'
            },
            style: {
                label: 'subscribe',
                layout: 'vertical',
                shape: 'pill'
            },
            onApprove: (data, actions) => {
                // facilitatorAccessToken: "A21AAJPkGzeulCJOyjhRyJd8cGYD3FDhXb3zbtc4L101axTg9SUTmpMPfkZX7e8hV67yKC1HB7QkhGZX_JkKdUe0qHimeWyng"
                // orderID: "909241869F8769929"
                // paymentSource: "card"
                // subscriptionID: "I-FJW8G9B8UAC8"
                this.apiService.activate({
                    userId: this.user.id.toString(),
                    orderId: data.orderID,
                    subscriptionId: data.subscriptionID,
                    price: 19.80,
                }).subscribe(result => {
                    this.userService.getUserInfo().subscribe(
                        {
                            next: (data => {
                                this.user = data;
                                this.eventEmitterService.onChangeUser(this.user);
                                this._changeDetectorRef.markForCheck();

                                if (!this.user) {
                                    localStorage.removeItem('AT');
                                    localStorage.removeItem('RT');
                                    localStorage.removeItem('ID');
                                    this.router.navigateByUrl('/sign-in');
                                }
                                this.eventEmitterService.onChangePage('subscription');
                                this.router.navigateByUrl('dashboard');
                            }),
                            error: (() => {
                                localStorage.removeItem('AT');
                                localStorage.removeItem('RT');
                                localStorage.removeItem('ID');
                            })
                        }

                    );
                });
            },
            onClientAuthorization: (data) => {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                //this.showSuccess = true;
            },
            onCancel: (data, actions) => {
                console.log('OnCancel', data, actions);
                //this.showCancel = true;

            },
            onError: (err) => {
                console.log('OnError', err);
                //this.showError = true;
            },
            onClick: (data, actions) => {
                console.log('onClick', data, actions);
                //this.resetStatus();
            }
        };
        setTimeout(() => {
            this.loading = false;
        }, 200);
    }

    ngAfterViewInit() {



        // this.plans.map((plan) => {
        //     this.configs[plan.name] = this.getConfig(plan.id);
        //     console.log(this.getConfig(plan.id));
        // });
        // this.payPalScriptService.registerPayPalScript(
        //     {
        //         clientId: 'AYAzRER3rHoWEr9LjxRKw9pbe09kNOeZzis2ib61gWZnXTTJK5lnGoDBEwQQlBHFEpM2DZdj6o6Men4y',
        //         currency: "USD",
        //         vault: "true",
        //     },
        //     (payPalApi) => {
        //         if (this.basicSubscription) {
        //             this.basicSubscription.customInit(payPalApi);
        //         }
        //         if (this.advancedSubscription) {
        //             this.advancedSubscription.customInit(payPalApi);
        //         }
        //     }
        // );

        // this.initConfig();
        // setTimeout(() => {
        //     // Render the PayPal button into #paypal-button-container
        //     <any>window['paypal'].Buttons({
        //         clientId: 'AYAzRER3rHoWEr9LjxRKw9pbe09kNOeZzis2ib61gWZnXTTJK5lnGoDBEwQQlBHFEpM2DZdj6o6Men4y',
        //         style: {
        //             shape: 'pill',
        //             color: 'silver',
        //             layout: 'vertical',
        //             label: 'subscribe'
        //         },
        //         createSubscription: function (data, actions) {
        //             return actions.subscription.create({
        //                 /* Creates the subscription */
        //                 plan_id: 'P-0RT39502AR598564GMNR2A7Q'
        //             });
        //         },
        //         onApprove: function (data, actions) {
        //             this.apiService.activate({
        //                 userId: this.user.id.toString(),
        //                 orderId: data.orderID,
        //                 subscriptionId: data.subscriptionID,
        //                 price: 19.90
        //             }).subscribe(result => {
        //                 this.userService.getUserInfo().subscribe(
        //                     {
        //                         next: (data => {
        //                             this.user = data;
        //                             this.eventEmitterService.onChangeUser(this.user);
        //                             this._changeDetectorRef.markForCheck();

        //                             if (!this.user) {
        //                                 localStorage.removeItem('AT');
        //                                 localStorage.removeItem('RT');
        //                                 localStorage.removeItem('ID');
        //                                 this.router.navigateByUrl('/sign-in');
        //                             }
        //                             this.eventEmitterService.onChangePage('subscription');
        //                         }),
        //                         error: (() => {
        //                             localStorage.removeItem('AT');
        //                             localStorage.removeItem('RT');
        //                             localStorage.removeItem('ID');
        //                         })
        //                     }

        //                 );
        //             });
        //         }
        //     }).render('#paypal-button-container');
        // }, 2000);
        //     setTimeout(() => {
        //         this.paypal.Buttons({
        //             style: {
        //                 shape: 'pill',
        //                 color: 'silver',
        //                 layout: 'vertical',
        //                 label: 'subscribe'
        //             },
        //             createSubscription: function (data, actions) {
        //                 return actions.subscription.create({
        //                     /* Creates the subscription */
        //                     plan_id: 'P-2CG554003U583503SMMZ4JJQ'
        //                 });
        //             },
        //             onApprove: function (data, actions) {
        //                 console.log(data);
        //                 alert(data.subscriptionID); // You can add optional success message for the subscriber here
        //             }
        //         }).render('#paypal-button-container-P-0RT39502AR598564GMNR2A7Q'); // Renders the PayPal button
        //     }, 10000);
    }

    // getConfig(plan_id: string): IPayPalConfig {
    //     return {
    //         clientId: 'AUDcxIQ0BpCD0O1y6mkBzMMxcdQDqea0CF7ql6X8C8RxcMZPdaUuqbShFl1T-PTfiVhU9JUsvN23Cf7B',
    //         currency: "USD",
    //         vault: "true",
    //         style: {
    //             label: "paypal",
    //             layout: "vertical",
    //             shape: "pill",
    //             color: "silver",
    //             tagline: false,
    //         },
    //         createSubscription: (data) => <ICreateSubscriptionRequest>{
    //             plan_id: plan_id
    //         },
    //         onApprove: function (data, actions) {
    //             this.apiService.activate({
    //                 userId: this.user.id.toString(),
    //                 orderId: data.orderID,
    //                 subscriptionId: data.subscriptionID,
    //                 price: 19.80
    //             }).subscribe(result => {
    //                 this.userService.getUserInfo().subscribe(
    //                     {
    //                         next: (data => {
    //                             this.user = data;
    //                             this.eventEmitterService.onChangeUser(this.user);
    //                             this._changeDetectorRef.markForCheck();

    //                             if (!this.user) {
    //                                 localStorage.removeItem('AT');
    //                                 localStorage.removeItem('RT');
    //                                 localStorage.removeItem('ID');
    //                                 this.router.navigateByUrl('/sign-in');
    //                             }
    //                             this.eventEmitterService.onChangePage('subscription');
    //                             this.router.navigateByUrl('/dashboard');
    //                         }),
    //                         error: (() => {
    //                             localStorage.removeItem('AT');
    //                             localStorage.removeItem('RT');
    //                             localStorage.removeItem('ID');
    //                         })
    //                     }

    //                 );
    //             });
    //         },
    //         onCancel: (data, actions) => {
    //             console.log("OnCancel", data, actions);
    //         },
    //         onError: (err) => {
    //             console.log("OnError", err);
    //         },
    //         onClick: (data, actions) => {
    //             console.log("Clicked:", data, actions);
    //         },
    //     };
    // }

    // private initConfig(): void {
    //     setTimeout(() => {
    //         this.payPalConfig = {
    //             currency: 'USD',
    //             intent: 'subscription',
    //             vault: 'true',
    //             clientId: 'AYAzRER3rHoWEr9LjxRKw9pbe09kNOeZzis2ib61gWZnXTTJK5lnGoDBEwQQlBHFEpM2DZdj6o6Men4y',
    //             createSubscription: (data) => <ICreateSubscriptionRequest>{
    //                 plan_id: 'P-0RT39502AR598564GMNR2A7Q'
    //             },
    //             advanced: {
    //                 commit: 'true'
    //             },
    //             style: {
    //                 label: 'subscribe',
    //                 layout: 'vertical',
    //                 shape: 'pill'
    //             },
    //             onApprove: (data, actions) => {
    //                 this.apiService.activate({
    //                     userId: this.user.id.toString(),
    //                     orderId: data.orderID,
    //                     subscriptionId: data.subscriptionID,
    //                     price: 19.80
    //                 }).subscribe(result => {
    //                     this.userService.getUserInfo().subscribe(
    //                         {
    //                             next: (data => {
    //                                 this.user = data;
    //                                 this.eventEmitterService.onChangeUser(this.user);
    //                                 this._changeDetectorRef.markForCheck();

    //                                 if (!this.user) {
    //                                     localStorage.removeItem('AT');
    //                                     localStorage.removeItem('RT');
    //                                     localStorage.removeItem('ID');
    //                                     this.router.navigateByUrl('/sign-in');
    //                                 }
    //                                 this.eventEmitterService.onChangePage('subscription');
    //                                 this.router.navigateByUrl('/dashboard');
    //                             }),
    //                             error: (() => {
    //                                 localStorage.removeItem('AT');
    //                                 localStorage.removeItem('RT');
    //                                 localStorage.removeItem('ID');
    //                             })
    //                         }

    //                     );
    //                 });
    //             },
    //             onClientAuthorization: (data) => {
    //                 console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
    //             },
    //             onCancel: (data, actions) => {
    //                 console.log('OnCancel', data, actions);
    //             },
    //             onError: err => {
    //                 console.log('OnError', err);
    //             },
    //             onClick: (data, actions) => {
    //                 console.log('onClick', data, actions);
    //             },
    //         };
    //     }, 2000);
    // }

    // basicAuth = 'Basic QWNWUTBIX05QTVlWMDIzSDhMM3Y2alhNcDRVdaUN2V0M4Mmo4a19hodjdkdS14M3F4dFJ6Y2pNTnRPcGN6OUpPdjU1TW9jTllsEV1p5WURWNm46RUZJRWtJd0dYdDFJSTdFRmlEdVQ3UWExV2ZXWDZnYmw3Z2w5ajgwZVlsVjI1ODdfUTRHSUxCSWxZfOGg1SzRRZTFhMZU1yVgFZGRThIWXAyRjA=';
    // getSubcriptionDetails(subcriptionId) {
    //     const xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function () {
    //         if (this.readyState === 4 && this.status === 200) {
    //             console.log(JSON.parse(this.responseText));
    //             alert(JSON.stringify(this.responseText));
    //         }
    //     };
    //     xhttp.open('GET', 'https://api.sandbox.paypal.com/v1/billing/subscriptions/' + subcriptionId, true);
    //     xhttp.setRequestHeader('Authorization', this.basicAuth);

    //     xhttp.send();
    // }

    generateSignature = (data, passPhrase = null) => {
        // Create parameter string
        let pfOutput = "";
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                if (data[key] !== "") {
                    pfOutput += `${key}=${encodeURIComponent(data[key].trim()).replace(/%20/g, "+")}&`
                }
            }
        }

        // Remove last ampersand
        let getString = pfOutput.slice(0, -1);
        if (passPhrase !== null) {
            getString += `&passphrase=${encodeURIComponent(passPhrase.trim()).replace(/%20/g, "+")}`;
        }

        return Md5.hashStr(getString);
        //return crypto.createHash("md5").update(getString).digest("hex");
    };

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

    getFormData(){
        let date = new Date();
        date.setDate(date.getDate() + 14);

        const myData = [];
        // Merchant details
        myData["merchant_id"] = "15252850";
        myData["merchant_key"] = "8n1rbtdsbz6io";
        myData["return_url"] = "https://vibeviewer.com/subscription-success";
        myData["cancel_url"] = "https://vibeviewer.com/subscription-cancel";
        myData["notify_url"] = "https://luvirosapi.com:1880/vibeviewer/api/notify";
        // // Buyer details
        // myData["name_first"] = "First Name";
        // myData["name_last"] = "Last Name";
        // myData["email_address"] = "test@test.com";
        // Transaction details
        myData["m_payment_id"] = this.user.id;
        myData["amount"] = "350.00";
        myData["item_name"] = "Vibe Viewer Subscription";

        myData["subscription_type"] = "1";
        //myData["billing_date"] = date.toISOString().slice(0, 10);
        myData["recurring_amount"] = "350.00";
        myData["frequency"] = "3";
        myData["cycles"] = "0";
        myData["email_address"] = this.user.email;
        // myData["subscription_notify_email"] = "0";
        // myData["subscription_notify_buyer"] = this.user.email;
        // myData["cycles"] = "0";
        // myData["cycles"] = "0";

        // Generate signature
        const myPassphrase = "ThisIsMyVibeViewerPassphrase007";
        myData["signature"] = this.generateSignature(myData, myPassphrase);

        return myData;
    }

    buildForm() {
        let date = new Date();
        date.setDate(date.getDate() + 14);

        const myData = [];
        // Merchant details
        myData["merchant_id"] = "15252850";
        myData["merchant_key"] = "8n1rbtdsbz6io";
        myData["return_url"] = "https://vibeviewer.com/subscription-success";
        myData["cancel_url"] = "https://vibeviewer.com/subscription-cancel";
        myData["notify_url"] = "https://luvirosapi.com:1880/vibeviewer/api/notify";
        // // Buyer details
        // myData["name_first"] = "First Name";
        // myData["name_last"] = "Last Name";
        // myData["email_address"] = "test@test.com";
        // Transaction details
        myData["m_payment_id"] = this.user.id;
        myData["amount"] = "350.00";
        myData["item_name"] = "Vibe Viewer Subscription";

        myData["subscription_type"] = "1";
        //myData["billing_date"] = date.toISOString().slice(0, 10);
        myData["recurring_amount"] = "350.00";
        myData["frequency"] = "3";
        myData["cycles"] = "0";
        myData["email_address"] = this.user.email;
        // myData["subscription_notify_email"] = "0";
        // myData["subscription_notify_buyer"] = this.user.email;
        // myData["cycles"] = "0";
        // myData["cycles"] = "0";

        // Generate signature
        const myPassphrase = "ThisIsMyVibeViewerPassphrase007";
        myData["signature"] = this.generateSignature(myData, myPassphrase);

        this.htmlForm = `<form action="https://www.payfast.co.za/eng/process" method="post">`;
        for (let key in myData) {
            if (myData.hasOwnProperty(key)) {
                let value = myData[key];
                if (value !== "") {
                    this.htmlForm += `<input name="${key}" type="hidden" value="${value.trim()}" />`;
                }
            }
        }

        this.htmlForm += '<input type="submit" value="Subscribe" /></form>';

        console.log(this.htmlForm);
    }
}

// export const plans = [
//     {
//         id: "P-0RT39502AR598564GMNR2A7Q",
//         name: "basic",
//         price: 19,
//     },
//     {
//         id: "P-0RT39502AR598564GMNR2A7Q",
//         name: "advanced",
//         price: 19.8,
//     },
// ];