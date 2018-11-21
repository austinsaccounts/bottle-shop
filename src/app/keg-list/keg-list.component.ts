import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/fresh-keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.scss']
})
export class KegListComponent implements OnInit {
  title = 'bottle-shop';
  kegs: Keg[] = [
    new Keg('Guinness Stout', 'Guinness', 6.5, 5),
    new Keg('Stella Artois', 'Stellar-brands', 6, 5.5),
    new Keg('Uppin Cider', 'Life Brewing', 7, 4.5)
  ];
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  expand(keg) {

  }

  ngOnInit() {
  }

}
