import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-project';
  toggleBarIsActive: boolean = false;

  onToggleBarChange(event: boolean){
    this.toggleBarIsActive = event;
  }
}
