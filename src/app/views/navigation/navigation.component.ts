import { Component, OnInit } from '@angular/core';
import { navigationPage } from "./../../animations/navigation.animation";


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [navigationPage],
  host: {
    '[@navigationPage]': ''
  }
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
