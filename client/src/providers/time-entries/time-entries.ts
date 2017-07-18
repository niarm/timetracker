import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ITimeEntry} from "../../interfaces/ITimeEntry";
import {TimeEntry} from "../../models/TimeEntry";


@Injectable()
export class TimeEntriesProvider {

  public data: ITimeEntry[];
  public db: any;
  public remote: any;

  public options = {
    live: true,
    retry: true,
    continuous: true
  };

  constructor (public http: Http) {
    this.db = new PouchDB("timetracker");
    this.remote = "http://localhost:5984/timetracker";
    this.db.sync(this.remote, this.options);
  }

  public init (details): void {
    this.db = new PouchDB('cloudo');

    this.remote = details.userDBs.supertest;

    let options = {
      live: true,
      retry: true,
      continuous: true
    };

    this.db.sync(this.remote, options);

    console.log(this.db);
  }

  public logout (): void {
    this.data = null;

    this.db.destroy().then(() => {
      console.log("database removed");
    });
  }

  public getTimeEntries (): Promise<ITimeEntry[]> {

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.db.allDocs({
        include_docs: true
      }).then((result) => {
        this.data = [];

        let docs = result.rows.map((row) => {
          this.data.push(row.doc);
        });

        resolve(this.data);

        this.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
          this.handleChange(change);
        });

      }).catch((error) => {
        console.log(error);
      });

    });
  }

  public createTimeEntry (timeEntry: ITimeEntry): void {
    this.db.post(timeEntry);
  }

  public updateTimeEntry (timeEntry: ITimeEntry): void {
    this.db.put(timeEntry).catch(error => {
      console.log(error);
    });
  }

  public deleteTimeEntry (timeEntry: ITimeEntry): void {
    this.db.remove(timeEntry).catch(error => {
      console.log(error);
    });
  }

  public handleChange (change): void {
    let changedDoc = null;
    let changedIndex = null;

    this.data.forEach((doc, index) => {
      if (doc._id === change.id) {
        changedDoc = doc;
        changedIndex = index;
      }
    });

    //A document was deleted
    if (change.deleted) {
      this.data.splice(changedIndex, 1);
    } else {

      //A document was updated
      if (changedDoc) {
        this.data[changedIndex] = changedDoc;
      } else {
        //A document was added
        this.data.push(change.doc);
      }

    }

  }
}
