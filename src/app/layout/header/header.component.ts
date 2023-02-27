import { Component } from '@angular/core';
import { MenuItem } from "./entity/header.interface";
import { MENU_ITEMS } from "./constants/menu-items";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuItems: Array<MenuItem> = MENU_ITEMS;

  constructor() { }

}
