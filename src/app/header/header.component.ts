// header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  showUserMenu: boolean = false;
  // Replace with actual username

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  logout() {
    // Implement logout logic here
    this.isLoggedIn = false;
    this.showUserMenu = false;
  }
}
