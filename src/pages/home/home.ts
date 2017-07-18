import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TimeEntry} from "../../models/TimeEntry";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public timeEntries: TimeEntry[];

  constructor (public navCtrl: NavController) {
    this.timeEntries=[
      {
        "_id":"1",
        "_rev":"1",
        "title":"Eine Aufgabe",
        "duration":"2,5 h"
      },
      {
        "_id":"2",
        "_rev":"2",
        "title":"Eine Aufgabe",
        "duration":"1,5 h"
      },
      {
        "_id":"3",
        "_rev":"1",
        "title":"Arbeitsschritt so und so",
        "duration":"4,5 h"
      },
      {
        "_id":"4",
        "_rev":"1",
        "title":"Arbeitsschritt so und so",
        "duration":"0,5 h"
      },
      {
        "_id":"5",
        "_rev":"2",
        "title":"Eine Aufgabe",
        "duration":"1,5 h"
      },
      {
        "_id":"6",
        "_rev":"1",
        "title":"Arbeitsschritt so und so",
        "duration":"4,5 h"
      },
      {
        "_id":"7",
        "_rev":"1",
        "title":"Arbeitsschritt so und so",
        "duration":"0,5 h"
      }
    ];
  }

}
