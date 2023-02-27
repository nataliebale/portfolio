import { Component } from '@angular/core';
import { MenuItem } from "./entity/header.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    {
      title: 'home',
      url: '/home'
    },
    {
      title: 'about us',
      url: '/about'
    },
    {
      title: 'blog entries',
      url: '/blogs'
    },
    {
      title: 'contact us',
      url: '/contact'
    }
  ]

  constructor() { }

}
