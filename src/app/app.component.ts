import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {NgForOf} from '@angular/common';
import {ApproachComponent} from './approach/approach.component';
import {StartComponent} from './start/start.component';
import {ProductComponent} from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactComponent, StartComponent, ProductComponent, ApproachComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'facialtruth-landingpage';

  navbarButtons = [
    { text: 'Inicio', link: 'inicio'},
    { text: 'Producto', link: 'producto'},
    { text: 'Enfoque', link: 'enfoque'},
    { text: '¿Quiénes somos?', link: 'quienes-somos'},
    { text: 'Contáctanos', link: 'contactanos'},
  ];
}
