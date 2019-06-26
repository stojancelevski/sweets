import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, LoadingController, MenuController, NavController, ToastController} from "@ionic/angular";
import { AngularFireAuth } from 'angularfire2/auth';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('username') user;
  @ViewChild('password') password;
  constructor(private menu:MenuController,
              public loadingCtrl:LoadingController,
              public navCtrl:NavController,
              private fire:AngularFireAuth,
              private storage: Storage,
              public toastCtrl: ToastController,
  ) { }


  ngOnInit() {
    this.menu.enable(false);
  }
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait',
      duration: 100
    });
    return await loading.present();
  }
  async  displayToast(message){
    let toast =await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  login(){
    this.presentLoading();
    this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
        .then( data => {
          this.displayToast('Success! You\'re logged in');
          this.storage.set('testApp.userId',55);
          this.navCtrl.navigateRoot('home');
          this.loadingCtrl.dismiss();
        })
        .catch( error => {
          this.loadingCtrl.dismiss();
          this.displayToast('Invalid Credentials!');
        })

  }
  register(){
    this.navCtrl.navigateForward('register');
  }

}
