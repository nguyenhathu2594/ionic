import { LoggedinPage } from './../loggedin/loggedin';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') user;
  @ViewChild('password') pwd;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fire: AngularFireAuth,
    private alertCtrl: AlertController) {
  }

  thongBao(message) {
    this.alertCtrl.create({
      title: 'Thông báo',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  dangNhapClick() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.pwd.value)
      .then(data => {
        console.log(data);
        this.thongBao('Đăng nhập thành công');
        this.navCtrl.setRoot(LoggedinPage);
      })
      .catch(err => {
        this.thongBao(`Đăng nhập thất bại. Lỗi: ${err.message}`);
      });
  }

}
