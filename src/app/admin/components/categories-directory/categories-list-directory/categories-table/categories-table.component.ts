import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.scss']
})
export class CategoriesTableComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
    deleteFile(e){
        console.log(e);
    }
}
