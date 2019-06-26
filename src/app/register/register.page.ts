import {Component, OnInit, ViewChild} from '@angular/core';
import {LoadingController, MenuController, NavController, ToastController} from '@ionic/angular';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    @ViewChild('username') user;
    @ViewChild('password') password;

    constructor(private menu: MenuController,
                private fire: AngularFireAuth,
                public toastCtrl: ToastController,
                public loadingCtrl: LoadingController,
                public navCtrl: NavController) {
    }

    ngOnInit() {
        this.menu.enable(false);
    }

    async displayToast(message) {
        let toast = await this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }

    async presentLoading() {
        const loading = await this.loadingCtrl.create({
            message: 'Please wait',
            duration: 100
        });
        return await loading.present();
    }

    registerUser() {
        this.presentLoading();
        this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
            .then(data => {

                    this.displayToast('Registered! Go and login now!');
                    this.navCtrl.navigateRoot('login');
                    this.loadingCtrl.dismiss();
                }
            )
            .catch(error => {
                this.loadingCtrl.dismiss();
                this.displayToast(error.message);

            });
    }
}
