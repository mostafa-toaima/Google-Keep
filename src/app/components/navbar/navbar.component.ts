import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();

  toggleSidebarClick() {
    this.toggleSidebar.emit();
  }
}
