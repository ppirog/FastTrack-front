import { Component } from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private router: Router) {}

  logout() {
    // Usunięcie tokena z sessionStorage
    sessionStorage.removeItem('token');

    // Opcjonalne przekierowanie do strony logowania
    this.router.navigate(['/login']);
  }
}
