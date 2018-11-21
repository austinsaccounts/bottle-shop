import { Component } from '@angular/core';
import { Keg } from './models/fresh-keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('Guinness Stout', 'Guinness', 6.5, 5),
    new Keg('Stella Artois', 'Stellar-brands', 6, 5.5),
    new Keg('Uppin Cider', 'Life Brewing', 7, 4.5)
  ];
}
