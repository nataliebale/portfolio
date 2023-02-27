import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from "./entity/header.interface";
import { MENU_ITEMS } from "./constants/menu-items";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleChangeEmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  public menuItems: Array<MenuItem> = MENU_ITEMS;
  public toggleBarIsActive: boolean = false;

  constructor() { }

  onToggleBarChange(){
    this.toggleBarIsActive = !this.toggleBarIsActive;
    this.toggleChangeEmit.emit(this.toggleBarIsActive);
  }

}
