import { UrsPage } from './urs/urs';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  constructor(private navCtrl: NavController) { }
  
  onUserL(name: string) {
    this.navCtrl.push(UrsPage, { userName: name });
  }

  ionViewCanEnter(){
   
  }
}
