import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  // Estado del menú
  isMenuOpen = false;

  // Método para alternar el menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Método para cerrarlo al hacer click en un link o fuera
  closeMenu() {
    this.isMenuOpen = false;
  }
}
