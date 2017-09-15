import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    private fire: AngularFireAuth
  ) {
  }

  dangKyUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.pwd.value)
      .then(data => {
        console.log(data);
      }).catch(err => {
        console.log(err);
      });
  }

}
