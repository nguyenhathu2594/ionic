import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') user;
  @ViewChild('password') pwd;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  dangNhapClick() {
    console.log(`Tên đăng nhập: ${this.user.value} - Mật khẩu: ${this.pwd.value}`);
  }

}
