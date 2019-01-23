import { trigger, transition, group, query, style, animate, stagger } from '@angular/animations';

export class RouterAnimations {
  static routeSlide =
    trigger('routeSlide', [
      transition('* <=> *', [
        group([
          query(':enter', [
            group([
            query('.vertical-middle-container',  [
                style({transform: 'translateX({{offsetEnter}}%)'}),
                animate('0.6s ease-in-out', style({transform: 'translateX(0%)'})),
            ]),
            
            query('.tile',  [
                style({ transform: 'translateY(100px)' }),
                animate('0.6s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
            ]),])
          ], {optional: true}),
          query(':leave', [
            group([
            query('.vertical-middle-container', [
                style({transform: 'translateX(0%)'}),
                animate('0.6s ease-in-out', style({transform: 'translateX({{offsetLeave}}%)', opacity: 0})),
            ]),
           
            query('.tile',  [
                style({ transform: 'translateY(0px)', opacity: 1 }),
                animate('0.6s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
              ]),])
          ], {optional: true}),
        ])
      ]),
    ]);
}