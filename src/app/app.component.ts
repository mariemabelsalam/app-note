import { Component } from '@angular/core';
import { NavbarComponent } from "./features/components/navbar/navbar.component";
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [NgxSpinnerModule , RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'noteAppAngular';
  constructor(private readonly ngxSpinnerService: NgxSpinnerService) { }
}
