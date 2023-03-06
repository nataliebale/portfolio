import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() showHeader: boolean;
  @Output() toggleChangeEmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleBarIsActive: boolean = false;

  constructor() { }

  onToggleBarChange(){
    this.toggleBarIsActive = !this.toggleBarIsActive;
    this.toggleChangeEmit.emit(this.toggleBarIsActive);
  }

}
