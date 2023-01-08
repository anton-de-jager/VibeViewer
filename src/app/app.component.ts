import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Geolocation } from '@capacitor/geolocation';
import { ApiService } from './services/api.service';
import { Device } from '@capacitor/device';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogTermsComponent } from './controls/dialog-terms/dialog-terms.component';
import { Router } from '@angular/router';
import { EventEmitterService } from './services/event-emitter.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen';
import { App, URLOpenListenerEvent } from '@capacitor/app';
// import { AppLauncher } from '@capacitor/app-launcher';
// import { PushNotifications } from '@capacitor/push-notifications';
//import { initializeApp } from "firebase/app";
// import { getMessaging, onMessage } from "firebase/messaging";
// import { onBackgroundMessage } from "firebase/messaging/sw";
//import { getAnalytics } from "firebase/analytics";
import { DatabaseService } from './services/database.service';
import { SQLiteService } from './services/sqlite.service';
// import { Platform } from '@ionic/angular';

const options: PositionOptions = {
    enableHighAccuracy: true,
    timeout: 25000,
    maximumAge: 0
};

// const firebaseConfig = {
//     apiKey: "AIzaSyBueWHfVFB_qtKRoRuS4a79ePYU92Upzss",
//     authDomain: "vibeviewer.firebaseapp.com",
//     projectId: "vibeviewer",
//     storageBucket: "vibeviewer.appspot.com",
//     messagingSenderId: "271266801048",
//     appId: "1:271266801048:web:18c6a33c08ba77cc17b7ed",
//     measurementId: "G-38RHCQR2LB"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const messaging = getMessaging();
// onMessage(messaging, (payload) => {
//     console.log('Message received. ', payload);
// });
// onBackgroundMessage(messaging, (payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//         body: 'Background Message body.',
//         icon: '/firebase-logo.png'
//     };

//     console.log(notificationTitle, notificationOptions);
// });

// const addListeners = async () => {
//     await PushNotifications.addListener('registration', token => {
//         console.info('Registration token: ', token.value);
//     });

//     await PushNotifications.addListener('registrationError', err => {
//         console.error('Registration error: ', err.error);
//     });

//     await PushNotifications.addListener('pushNotificationReceived', notification => {
//         console.log('Push notification received: ', notification);
//         alert(JSON.stringify(notification));
//     });

//     await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
//         console.log('Push notification action performed', notification.actionId, notification.inputValue);
//     });
// }

// const registerNotifications = async () => {
//     let permStatus = await PushNotifications.checkPermissions();

//     if (permStatus.receive === 'prompt') {
//         permStatus = await PushNotifications.requestPermissions();
//     }

//     if (permStatus.receive !== 'granted') {
//         throw new Error('User denied permissions!');
//     }

//     await PushNotifications.register();
// }

// const getDeliveredNotifications = async () => {
//     const notificationList = await PushNotifications.getDeliveredNotifications();
//     console.log('delivered notifications', notificationList);
// }

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterContentInit {
    version: string = '207';
    deviceId: string;
    wait: any;
    ready: boolean = false;
    enabled: boolean = true;
    public isWeb: boolean = false;
    private initPlugin: boolean;

    constructor(
        private zone: NgZone,
        private _changeDetectorRef: ChangeDetectorRef,
        private apiService: ApiService,
        private dialog: MatDialog,
        private router: Router,
        private eventEmitterService: EventEmitterService,
        private fuseSplashScreenService: FuseSplashScreenService,
        private databaseService: DatabaseService,
        private sqlite: SQLiteService,
        // public platform: Platform
    ) {
        // if (Capacitor.getPlatform() !== 'web') {
        //     addListeners().then(res => {
        //         console.log(res);
        //         registerNotifications().then(res => {
        //             console.log(res);
        //             getDeliveredNotifications().then(res => {
        //                 console.log(res);
        //             });
        //         });
        //     });
        // }

        // AppLauncher.canOpenUrl({ url: 'com.vibeviewer.app' }).then(result => {
        //     //console.log(result);
        //     //AppLauncher.openUrl({ url: 'com.vibeviewer.app://page?id=sign-up' });
        //     //https://play.google.com/store/apps/details?id=com.vibeviewer.app
        // })

        this.fuseSplashScreenService.show();
        //this.router.navigate(['/promotion/69718560-00CE-42A4-BF99-D3DF0B24C292']);
        if (Capacitor.getPlatform() !== 'web') {
            LocalNotifications.addListener('localNotificationActionPerformed', (payload) => {
                this.apiService.updateDevicePromotion(payload.notification.extra.id, payload.notification.extra.deviceId, 'read').subscribe(res => { });
                const route = payload.notification.extra.route;
                const id = payload.notification.extra.id;
                this.router.navigate([route + '/' + id]);
                try {
                    setTimeout(() => {
                        _changeDetectorRef.detectChanges();
                        _changeDetectorRef.markForCheck();
                        this.zone.runOutsideAngular(x => {
                            this.router.navigate([route + '/' + id]);
                        })
                    }, 200);
                } catch (exc) {
                    console.log(exc);
                }
            });
            LocalNotifications.addListener('localNotificationReceived', (payload) => {
                //console.log(JSON.stringify(payload));
            });
        }
        this.initDevice();
        App.addListener('appStateChange', ({ isActive }) => {
            //console.log('App state changed. Is active?', isActive);
            if (isActive) {
                //this.router.navigateByUrl('refresh');
                this.initDevice();
            }
        });

        App.addListener('appUrlOpen', (data: URLOpenListenerEvent) => {
            //console.log('App opened with URL:', JSON.stringify(data));
            const openUrl = data.url;
            window.location.href = data.url;
            //alert(openUrl);
            // Use URL for routing to the right page!
        });

        App.addListener('appUrlOpen', data => {
            //console.log('App opened with URL:', data);
        });

        App.addListener('appRestoredResult', data => {
            //console.log('Restored state:', data);
        });
    }

    initDevice() {
        Device.getId().then(id => {
            this.deviceId = id.uuid;
            //this.apiService.getItemParm('devices', this.deviceId).subscribe(getDeviceRes => { });
            this.apiService.getDevice(this.deviceId).subscribe(getDeviceRes => {
                // this.apiService.getItem('versions').subscribe(version => {
                //     console.log(version.value);
                // })
                this.fuseSplashScreenService.hide();
                if (!getDeviceRes.device.accepted) {
                    const dialogConfig = new MatDialogConfig();

                    dialogConfig.data = {
                        deviceId: getDeviceRes.deviceId//getDeviceRes.device.deviceId
                    };

                    dialogConfig.autoFocus = true;
                    dialogConfig.disableClose = true;
                    dialogConfig.hasBackdrop = true;
                    dialogConfig.ariaLabel = 'fffff';
                    dialogConfig.width = "100vw";
                    dialogConfig.maxWidth = "600px";
                    dialogConfig.panelClass = 'full-screen-modal';

                    const dialogRef = this.dialog.open(DialogTermsComponent,
                        dialogConfig);

                    dialogRef.afterClosed().subscribe(result => {
                        this.apiService.saveItemParm('devices/accept', this.deviceId).subscribe(res => {
                            //console.log('Accepted');
                        })
                    });
                }
                this.logLocation();
            });
            //this.startTracking();
        });
    }
    ngAfterContentInit(): void {
        if (Capacitor.getPlatform() !== 'web') {
            // //this.requestPermission('Always').then(x => {
            //     /// Step 1:  Subscribe to BackgroundGeolocation events.
            //     this.subscriptions.push(BackgroundGeolocation.onLocation((location) => {
            //         // //this.addEvent('onLocation', location);
            //         // this.apiService.saveLocation(this.deviceId, location.coords.latitude, location.coords.longitude).subscribe(res => {
            //         //     //this.initNotification('onLocation', JSON.stringify(location, null, 2), this.addMinutes(new Date(), 1));
            //         // });
            //         this.logLocation('onLocation');
            //     }));

            //     this.subscriptions.push(BackgroundGeolocation.onMotionChange((event) => {
            //         // //this.addEvent('onMotionChange', event);
            //         // this.apiService.saveLocation(this.deviceId, event.location.coords.latitude, event.location.coords.longitude).subscribe(res => {
            //         //     //this.initNotification('onMotionChange', JSON.stringify(event, null, 2), this.addMinutes(new Date(), 1));
            //         // });
            //         this.logLocation('onMotionChange');
            //     }));

            //     this.subscriptions.push(BackgroundGeolocation.onHeartbeat((event) => {
            //         this.logLocation('onHeartbeat');
            //     }));

            //     this.subscriptions.push(BackgroundGeolocation.onActivityChange((event) => {
            //         //this.addEvent('onActivityChange', event);
            //         //this.initNotification('onActivityChange', JSON.stringify(event, null, 2), this.addMinutes(new Date(), 1));
            //         this.logLocation('onActivityChange');
            //     }))

            //     this.subscriptions.push(BackgroundGeolocation.onProviderChange((event) => {
            //         //this.addEvent('onProviderChange', event);
            //         //this.initNotification('onProviderChange', JSON.stringify(event, null, 2), this.addMinutes(new Date(), 1));
            //         this.logLocation('onProviderChange');
            //     }))

            //     /// Step 2:  Ready the plugin.
            //     BackgroundGeolocation.ready({
            //         // Geolocation Config
            //         desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
            //         distanceFilter: 10,
            //         // Activity Recognition
            //         stopTimeout: 5,
            //         // Application config
            //         debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
            //         logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
            //         stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when user closes the app.
            //         startOnBoot: true,  // <-- Auto start tracking when device is powered-up.
            //         heartbeatInterval: 16,       
            //         preventSuspend: true
            //     }).then((state) => {
            //         // BackgroundGeolocation is now ready to use.
            //         this.ready = true;
            //         this.enabled = state.enabled;
            //         //this.addEvent('State', state);
            //     });


            //     //this.initNotification('15% Discount at New Restaurant', 'Receive 15% Discount tonight between 17:00 and 21:00 at New Restaurant!!!', this.addMinutes(new Date(), 1));
            // //});
        };
    }


    // async requestPermission(request) {
    //     await BackgroundGeolocation.setConfig({
    //         locationAuthorizationRequest: request,
    //         backgroundPermissionRationale: {
    //             title: "Allow {applicationName} to access to this device's location in the background?",
    //             message: "Your location is used to find the vibe closest to you. Your location is NOT shared. Please enable {backgroundPermissionOptionLabel} location permission",
    //             positiveAction: "Change to {backgroundPermissionOptionLabel}",
    //             negativeAction: "Cancel"
    //         },

    //         locationAuthorizationAlert: {
    //             titleWhenNotEnabled: "Location services are not enabled",
    //             titleWhenOff: "Location services are off",
    //             instructions: "{applicationName} requires background location tracking to be turned on. You must enable 'Always' in location-services",
    //             cancelButton: "Cancel",
    //             settingsButton: "Settings"
    //         }
    //     });
    //     let status = await BackgroundGeolocation.requestPermission();
    // }

    /// When view is destroyed, be sure to .remove() all BackgroundGeolocation
    /// event-subscriptions.
    ngOnDestroy() {
        // this.subscriptions.forEach((subscription: Subscription) => {
        //     subscription.remove();
        // })
    }

    // /// Add an event to the view.
    // addEvent(name: string, event: any) {
    //     this.zone.run(() => {
    //         this.events.push({
    //             name: name,
    //             json: JSON.stringify(event, null, 2)
    //         });
    //     })
    // }

    ngAfterViewInit(): void {
        if (Capacitor.getPlatform() !== 'web') {
            this.init();
        }
        //this.router.navigate(['/promotion/kljljdassad09sdj90asjd']);
    }

    // startTracking() {
    //     this.wait = Geolocation.watchPosition({ enableHighAccuracy: true, timeout: 1200000 }, (position, err) => {
    //         this.zone.run(() => {
    //             let date = new Date(localStorage.getItem('lastUpdated') ? localStorage.getItem('lastUpdated') : (new Date()).getMinutes() - (15 * 60000));
    //             if ((new Date()) > this.addMinutes(date, 15)) {
    //                 localStorage.setItem('lastUpdated', (new Date()).getMinutes().toString());
    //                 this.apiService.saveLocation(this.deviceId, position.coords.latitude, position.coords.longitude).subscribe(res => {
    //                     console.log({ time: this.data.getTimestamp(new Date()), lat: position.coords.latitude, lng: position.coords.longitude });
    //                     this.eventEmitterService.onChangeLocation({ time: this.data.getTimestamp(new Date()), lat: position.coords.latitude, lon: position.coords.longitude });
    //                 });
    //             }
    //         })
    //     })
    // }

    // stopTracking() {
    //     Geolocation.clearWatch({ id: this.wait });
    // }

    async init() {
        // BackgroundFetch.stop();
        // // You must ALWAYS first configure BackgroundFetch.
        // const status = await BackgroundFetch.configure({
        //     minimumFetchInterval: 15,
        //     stopOnTerminate: false,
        //     enableHeadless: true,
        //     startOnBoot: true
        // }, async (taskId) => {
        //     console.log('[BackgroundFetch] EVENT', taskId);
        //     // if (taskId === 'my-custom-task') {
        //     //     this.logLocation();
        //     //     console.log('Handle your custom-task here');
        //     // } else {
        //     //     console.log('This is the default, periodic fetch task');
        //     // }
        //     this.logLocation('LOG');
        //     // Always signal completion of your tasks.
        //     BackgroundFetch.finish(taskId);
        // }, async (taskId) => {
        //     console.log('[BackgroundFetch] TIMEOUT', taskId);
        //     // if (taskId === 'my-custom-task') {
        //     //     console.log('My custom task timed-out');
        //     // } else {
        //     //     console.log('The default, periodic fetch task timed-out');
        //     // }
        //     BackgroundFetch.finish(taskId);
        // });

        // setTimeout(() => {
        //     BackgroundFetch.start();
        // }, 1000);

        // // Execute an additional custom-task.
        // BackgroundFetch.scheduleTask({
        //     taskId: 'my-custom-task',  // <-- REQUIRED
        //     delay: 10000,              // <-- REQUIRED
        //     periodic: true            // <-- ONE-SHOT (default)
        // })
    }

    // async initBackgroundFetch() {
    //     const status = await BackgroundFetch.configure({
    //         minimumFetchInterval: 15,
    //         stopOnTerminate: false,
    //         enableHeadless: true
    //     }, async (taskId) => {
    //         console.log('[BackgroundFetch] EVENT:', taskId);

    //         // Add record to list within NgZone
    //         this.zone.run(() => {
    //             this.data.create(taskId, false);
    //         });

    //         // Perform your work in an awaited Promise
    //         const result = await this.performYourWorkHere();
    //         console.log('[BackgroundFetch] work complete:', result);
    //         // [REQUIRED] Signal to the OS that your work is complete.
    //         BackgroundFetch.finish(taskId);
    //     }, async (taskId) => {
    //         // The OS has signalled that your remaining background-time has expired.
    //         // You must immediately complete your work and signal #finish.
    //         console.log('[BackgroundFetch] TIMEOUT:', taskId);
    //         // [REQUIRED] Signal to the OS that your work is complete.
    //         BackgroundFetch.finish(taskId);
    //     });

    //     // Checking BackgroundFetch status:
    //     if (status !== BackgroundFetch.STATUS_AVAILABLE) {
    //         if (status === BackgroundFetch.STATUS_DENIED) {
    //             alert('The user explicitly disabled background behavior for this app or for the whole system.');
    //         } else if (status === BackgroundFetch.STATUS_RESTRICTED) {
    //             alert('Background updates are unavailable and the user cannot enable them again.')
    //         }
    //     }
    // }

    // async performYourWorkHere() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             this.logLocation();
    //             resolve(true);
    //         }, 100);
    //     });
    // }

    initNotification(id, urlImage, title, body, date: Date) {
        if (Capacitor.getPlatform() != 'web') {
            LocalNotifications.schedule({
                notifications: [
                    {
                        title: title,
                        body: body,
                        id: (new Date()).getTime(),
                        schedule: { at: date, allowWhileIdle: true },
                        sound: null,
                        attachments: [
                            { id: 'face', url: 'https://api.vibeviewer.com/Images/Promotions/' + id + '.' + urlImage, options: {} }
                        ],
                        actionTypeId: "",
                        extra: {
                            action: 'promotion',
                            deviceId: this.deviceId,
                            route: 'promotion',
                            id: id
                        }
                    }
                ]
            });
        }
    }

    addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes * 60000);
    }

    logLocation() {
        Geolocation.getCurrentPosition(options).then(getCurrentPositionResult => {
            this.apiService.saveLocation(this.deviceId, getCurrentPositionResult.coords.latitude, getCurrentPositionResult.coords.longitude).subscribe(res => {
                if (Capacitor.getPlatform() !== 'web') {
                    this.getDevicePromotions(getCurrentPositionResult.coords.latitude, getCurrentPositionResult.coords.longitude);
                }
                //this.initNotification(title, this.data.getTimestamp(new Date()), this.addMinutes(new Date(), 1));
            });
        });
    }

    getDevicePromotions(lat, lon) {
        this.apiService.getDevicePromotions(this.deviceId, lat, lon).subscribe(promotions => {
            let minutes = 1;
            promotions.forEach(promotion => {
                this.initNotification(promotion.id, promotion.urlImage, promotion.title, promotion.content, this.addMinutes(new Date(), minutes));
                minutes += 1;
                this.apiService.logDevicePromotion(promotion.id, this.deviceId, 'sent').subscribe(res => { });
            });
        })
    }
}
