import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { NavParams, AlertController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: Quote[], icon: string };
  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService) { }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Thích Quote',
      message: 'Bạn có đồng ý thêm quote này vào danh mục yêu thích?',
      buttons: [
        {
          text: 'Có',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        }, {
          text: 'Không',
          role: 'cancel', //Click ra ngoài thì nó tự nhận đó là 'không'
          handler: () => {
            console.log('Không');
          }
        }]
    });

    alert.present();
  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  // }
}
