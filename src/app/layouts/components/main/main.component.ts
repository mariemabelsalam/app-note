import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../../features/components/navbar/navbar.component";
import { FooterComponent } from "../../../features/components/footer/footer.component";

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
