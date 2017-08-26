import { NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'page-buyout',
    templateUrl: 'buyout.html'
})
export class BuyoutPage {
    productData: { name: string, soluong: number };
    constructor(private navParams: NavParams, private navController: NavController) {
        this.productData = this.navParams.data;
    }
    onBack() {
        this.navController.popToRoot();
    }
}