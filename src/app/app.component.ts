import {Component, ViewChild} from '@angular/core';

import {AlertController, IonRouterOutlet, NavController, Platform, ToastController} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {Storage} from "@ionic/storage";
@Component ({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;

    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Logout',
            url: '/login',
            icon: 'md-log-out'
        },
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storage: Storage,
        public toastCtrl: ToastController,
        public navCtrl: NavController,
        private router: Router,
        public alert: AlertController
    ) {
        this.initializeApp();
        storage.get('testApp.userId').then((val) => {

            if (val != 0 && val != null) {
                this.navCtrl.navigateRoot('home');
            } else {
                this.navCtrl.navigateRoot('login');

            }
        });

        this.platform.backButton.subscribe(() => {
            if (this.routerOutlet && this.routerOutlet.canGoBack()) {
                this.routerOutlet.pop();
            } else if (this.router.url === '/login') {
                navigator['app'].exitApp();
            }
        });

    }

    async showAlert() {
        const alert = await this.alert.create({
            header: 'Exit',
            subHeader: 'Do you want to exit the app?',
            buttons: [{
                text: 'Yes',
                handler: () => {
                    navigator['app'].exitApp();
                }
            }, {
                text: 'No',
                handler: () => {
                    this.alert.dismiss();
                }
            }]
        });
        await alert.present();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    async displayToast(message) {
        const toast = await this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.title === 'Logout') {
            this.storage.set('testApp.userId', 0);
            this.displayToast('Sucessfully Logged Out!!!');
            this.navCtrl.navigateRoot('login');
        }

    }
}

