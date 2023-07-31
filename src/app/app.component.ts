import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ViewChild('scroller') scroller: ElementRef;

  title = 'portfolio-project';
  toggleBarIsActive: boolean = false;
  showHeader = true;

  // ngOnInit() {
  //   this.scroller.nativeElement.onscroll = () => {
  //     let top = this.scroller.nativeElement.scrollTop;
  //     if (top > 0) {  // We scrolled down
  //       this.showHeader = false;
  //     }
  //     else {
  //       this.showHeader = true;
  //     }
  //   }
  // }

  onToggleBarChange(event: boolean){
    this.toggleBarIsActive = event;
  }
}
