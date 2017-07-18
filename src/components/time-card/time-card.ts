import {Component, Input} from '@angular/core';
import {ITimeEntry} from "../../interfaces/ITimeEntry";

/**
 * Generated class for the TimeCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'time-card',
  templateUrl: 'time-card.html'
})
export class TimeCardComponent {

  @Input() public timeEntry:ITimeEntry;

  constructor() {
  }

}
