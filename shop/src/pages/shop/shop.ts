import { BuyoutPage } from './../buyout/buyout';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  constructor(private navCtrl: NavController) {

  }

  onBuy(productData: { name: string, soluong: number }) {
    this.navCtrl.push(BuyoutPage, productData);
  }
}
