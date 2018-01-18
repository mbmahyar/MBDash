import { Component, OnInit } from '@angular/core';
import { ADMIN_ROUTER } from '../../constants/router';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private tabs;
  private sidebar;
  private links;
  public adminRouter = ADMIN_ROUTER;
  constructor() {}

  ngOnInit() {
      //Accordion Menu (Tabs)
      this.tabs = document.querySelectorAll('.sidebar-tab');
      this.tabs.forEach(function (tab) {
          tab.addEventListener('click', closeTab);
      });
      function closeTab(e) {
        if (e.target.checked === false) {
          return;
        }
        this.tabs = document.querySelectorAll('.sidebar-tab');
        for (let i = 0; i < this.tabs.length; i++) {
            this.tabs[i].checked =  false;
        }
        e.target.checked = true;
      }
      // Sidebar Status
      this.sidebar = document.querySelector('#sm-sidebar');
      this.sidebar.addEventListener('change',sidebarState);
      function sidebarState(e){
         if (e.target.checked == true){
            document.getElementById('sidebar-list').className = 'sidebar-state-true';
            document.getElementById('sidebar-overlay').className = 'sidebar-overlay-true';
            document.getElementById('sidebar-overlay').addEventListener('click',closeSidebarList);
            this.links = document.querySelectorAll('.sm-sidebar-state');
            this.links.forEach(function (link) {
                link.addEventListener('click',closeSidebarList);
            });
         }else {
             document.getElementById('sidebar-list').classList.remove('sidebar-state-true');
         }
      }
      function closeSidebarList(){
          document.getElementById('sidebar-overlay').classList.remove('sidebar-overlay-true');
          document.getElementById('sm-sidebar').click();
      }
  }

}
