import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = '';
  message: string = '';
  sub;
  messages: object[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase) {
    this.username = this.navParams.get('username');
    this.sub = this.db.list('/chat').subscribe(data => {
      // data.map(elem => {
      //   this.messages.push(elem);
      // })
      this.messages = data;
    })
  }

  sendMes() {
    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    }).then(() => {

    }).catch(() => {

    });
    this.message = '';
  }

  ionViewDidLoad() {

  }

}
