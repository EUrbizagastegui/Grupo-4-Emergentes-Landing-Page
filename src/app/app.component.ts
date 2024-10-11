import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'facialtruth-landingpage';

  navbarButtons = [
    { text: 'Inicio', link: '/'},
    { text: 'Producto', link: '/'},
    { text: 'Enfoque', link: '/'},
    { text: '¿Quiénes somos?', link: '/'},
    { text: 'Contáctanos', link: '/'},
  ];
}
