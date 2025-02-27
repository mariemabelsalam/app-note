import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private readonly router:Router){}
  @Input() inMain:boolean=true

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
