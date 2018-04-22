import { Component, OnInit } from '@angular/core';
import { ListService } from './shared/list.service';
import { element } from 'protractor';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent implements OnInit {
  listArray: any[];
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.getList().snapshotChanges()
    .subscribe(item => {
      this.listArray = [];
      item.forEach(elem => {
        const x = elem.payload.toJSON();
        x['$key'] = elem.key;
        this.listArray.push(x);
      });

        // sort unchecked items to top of list
        this.listArray.sort((a, b) => {
          return a.isChecked - b.isChecked;
        });
    });
  }

  onAdd(listItem) {
    this.listService.addItem(listItem.value);
    listItem.value = null;
  }

}
