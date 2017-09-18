import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string = '';
  pwd: string = '';

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController
  ) {

  }

  showAlert(title: string, mes: string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: mes,
      buttons: ['OK']
    });
    alert.present();
  }

  loginUser(){
    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      this.navCtrl.push(ChatPage,{
        username: this.username
      })
    }
    else{
      this.showAlert('Lỗi','Username không được chứa ký tự đặc biệt. Vui lòng kiểm tra lại');
    }
  }
}
