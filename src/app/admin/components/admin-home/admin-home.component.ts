import { Component, OnInit } from '@angular/core';
import { IAlert } from '../../interfaces/IAlert';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
    public alerts: Array<IAlert> = [];

  constructor() {
  }

  ngOnInit() {
      this.alerts.push({
          type: 'success',
          message: 'به پنل مدیریت سایت خوش آمدید.',
      }, {
          type: 'info',
          message: 'صرفا جهت اطلاع شما!',
      }, {
          type: 'warning',
          message: '3 نفر منتظر تایید نظرشان هستند.',
      }, {
          type: 'danger',
          message: 'پیام مورد نظر حذف شد.',
      });
  }
  public closeAlert(alert: IAlert) {
      const index: number = this.alerts.indexOf(alert);
      this.alerts.splice(index, 1);
  }

}
