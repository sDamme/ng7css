import { Component } from '@angular/core';
import { routerTransition } from "./animations/router.animation";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  getState(outlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
