import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-pagination',
  templateUrl: './categories-pagination.component.html',
  styleUrls: ['./categories-pagination.component.scss']
})
export class CategoriesPaginationComponent implements OnInit {
  page = 1;
  constructor() { }

  ngOnInit() {
  }

}
