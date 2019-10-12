import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../model/menuItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menu: MenuItem[];

  constructor() {
    this.menu = new Array<MenuItem>()
    this.menu.push({
      label: 'Dashboard',
      routerLink: '/',
      isActive: false,
      icon: 'fas fa-tachometer-alt'
    },
      {
        label: 'Rubrica',
        routerLink: '',
        isActive: false,
        icon: 'fas fa-user',
        children: [
          { label: 'Lista Contatti', routerLink: '/lista_contatti', isActive: false, icon: 'fas fa-th-list' },
          { label: 'Nuovo Contatto', routerLink: '/inserisci', isActive: false, icon: 'fas fa-edit' }
        ]
      });
  }

  ngOnInit() {
  }

  setActive(father: MenuItem, item: MenuItem) {
    this.deselectAll(this.menu);
    if (father.children && item != null) {
      item.isActive = true;
      father.isActive = true;
    } else {
      father.isActive = true;
    }
  }

  private deselectAll(menu: MenuItem[]) {
    for (let item of menu) {
      item.isActive = false;
      if (item.children) {
        this.deselectAll(item.children);
      }
    }
  }

}
