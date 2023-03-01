import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from "../entity/header.interface";
import { MENU_ITEMS } from "../constants/menu-items";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() toggleChangeEmit: EventEmitter<void> = new EventEmitter<void>();

  public menuItems: Array<MenuItem> = MENU_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
