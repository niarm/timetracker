import {Component} from '@angular/core';
import {ActionSheetController, ModalController, NavController} from 'ionic-angular';
import {ITimeEntry} from "../../interfaces/ITimeEntry";
import {TimeEntryPage} from "../time-entry/time-entry-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public timeEntries: ITimeEntry[];
  private actionSheetOptions = {
    title: '',
    target:null,
    buttons: [
      {
        text: 'Bearbeiten',
        handler: () => {
          console.log('EDIT clicked');
        }
      },
      {
        text: 'Löschen',
        role: 'destructive',
        handler: () => {
          console.log('Destructive clicked');
          console.log(this.actionSheetOptions.target);
        }
      },
      {
        text: 'Abbrechen',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  };

  constructor (public navCtrl: NavController,
               public actionSheetCtrl: ActionSheetController,
               public modalCtrl: ModalController) {
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

  public onNewEntryClick():void{
    let modal = this.modalCtrl.create(TimeEntryPage);
    modal.present();
  }

  public onItemClicked(item:ITimeEntry):void{
    this.actionSheetOptions.target = item;
    this.actionSheetOptions.title = "Ausgewählt: " + item.title;
    let actionSheet = this.actionSheetCtrl.create(this.actionSheetOptions);
    actionSheet.present();
  }

}
