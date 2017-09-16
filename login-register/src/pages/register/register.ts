import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') user;
  @ViewChild('password') pwd;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fire: AngularFireAuth,
    private alertCtrl: AlertController
  ) {
  }

  thongBao(message) {
    this.alertCtrl.create({
      title: 'Thông báo',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  dangKyUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.pwd.value)
      .then(data => {
        this.thongBao('Đăng ký thành công');
      }).catch(err => {
        console.log(err);
        this.thongBao(`Đăng ký thất bại. Lỗi: ${err.message}`);
      });
  }

}
