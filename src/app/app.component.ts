import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {ContactComponent} from './contact/contact.component';
import {NgForOf} from '@angular/common';
import {ApproachComponent} from './approach/approach.component';
import {StartComponent} from './start/start.component';
import {ProductComponent} from './product/product.component';
import {TeamComponent} from './team/team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactComponent, StartComponent, ProductComponent, ApproachComponent, NgForOf, FooterComponent, TeamComponent],
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
