import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;
  constructor(private viewportScroller: ViewportScroller) {}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
  scrollToSection(section: string) {
    this.isMenuOpen = false;
    this.viewportScroller.scrollToAnchor(section);
  }
}
