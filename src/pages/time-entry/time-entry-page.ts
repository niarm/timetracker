import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the TimeEntryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'time-entry-page',
  templateUrl: 'time-entry-page.html',
})
export class TimeEntryPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeEntryPage');
  }

  public  dismiss():void {
    this.viewCtrl.dismiss();
  }
}
