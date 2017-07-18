import {ITimeEntry} from "../interfaces/ITimeEntry";

export class TimeEntry implements ITimeEntry{
  _id: string;
  _rev: string;
  title: string;
  duration: string;

  constructor(){

  }

}
