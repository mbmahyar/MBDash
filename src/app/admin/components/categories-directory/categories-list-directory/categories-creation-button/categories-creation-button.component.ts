import { Component, OnInit } from '@angular/core';
import { ADMIN_ROUTER } from '../../../../constants/router';

@Component({
  selector: 'app-categories-creation-button',
  templateUrl: './categories-creation-button.component.html',
  styleUrls: ['./categories-creation-button.component.scss']
})
export class CategoriesCreationButtonComponent implements OnInit {
  public adminRouter = ADMIN_ROUTER;
  constructor() { }

  ngOnInit() {
  }

}
