import { Component } from '@angular/core';
import { Keg } from './models/fresh-keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bottle-shop';
  firstKeg: Keg = new Keg('Guinness Stout', 'Guinness', 6.5, 5);
}
