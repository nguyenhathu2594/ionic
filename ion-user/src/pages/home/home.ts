import { UserPage } from './../user/user';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ursPage = UserPage;
}
