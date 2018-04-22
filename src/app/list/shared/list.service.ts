import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ListService {
  list: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getList() {
    this.list = this.firebasedb.list('items');
    return this.list;
  }

  addItem(item: string) {
    this.list.push({
      item: item,
      isChecked: false
    });
  }

  checkOrUncheckItem($key: string, flag: boolean) {
    this.list.update($key, { isChecked: flag });
  }

  removeItem($key: string) {
    this.list.remove($key);
  }
}
