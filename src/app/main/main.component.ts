import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  constructor() { }
  isHidden: boolean = false;


  toggleSidebar() {
    this.isHidden = !this.isHidden;
    console.log(this.isHidden);
  }

}
