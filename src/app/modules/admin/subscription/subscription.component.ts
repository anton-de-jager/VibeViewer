import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'app/shared/shared.service';
import { VariableService } from 'app/services/variable.service';
import { UserService } from 'app/core/user/user.service';
import { UserService as UserServiceApp } from 'app/services/user.service';
import { EventEmitterService } from 'app/services/event-emitter.service';
import { ApiService } from 'app/services/api.service';
import { environment } from 'environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Md5 } from 'ts-md5';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogNotificationComponent } from 'app/controls/dialog-notification/dialog-notification.component';
import { FuseSplashScreenService } from '@fuse/services/splash-screen';
import { Browser } from '@capacitor/browser';

@Component({
    selector: 'subscription',
    templateUrl: './subscription.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SubscriptionComponent implements OnInit, AfterViewInit {
    user: any;
    planId = '';
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
        private fuseSplashScreenService: FuseSplashScreenService
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
    }

    subscribe() {
        this.fuseSplashScreenService.show();
        var url = environment.api + '/api/payfast/subscription';
        url += '/' + encodeURIComponent(this.user.id.toString()).replace(/%20/g, '+');
        url += '/' + encodeURIComponent(this.user.email).replace(/%20/g, '+');
        url += '/199';
        Browser.open({ url: url, windowName: '_self' });

        this.fuseSplashScreenService.hide();
    }

    ngAfterViewInit() {
    }

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