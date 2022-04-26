import {Component} from '@angular/core';
import {ListItem} from "../../../shared/model/list-item";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuItem: Array<ListItem> = [
    new ListItem('people', 'People'),
    new ListItem('about', 'About')
  ]

  constructor() {
  }

}
