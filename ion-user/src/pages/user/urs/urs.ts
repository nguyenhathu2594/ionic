import { NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-urs',
    templateUrl: 'urs.html'
})

export class UrsPage implements OnInit {
    constructor(private navParams: NavParams) { }
    name: string;

    ngOnInit() {
        this.name = this.navParams.get('userName');
    } 

}

