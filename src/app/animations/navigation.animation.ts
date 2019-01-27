import {trigger, stagger, animate, style, query as q, transition} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const navigationPage = trigger('navigationPage', [
    transition(':enter', [
      query('.navigation-cover', style({ opacity: 0 })),  
      query('.navigation-menu-item', style({ opacity: 0})),
      query('.navigation-cover', stagger(200, [
        style({ transform: 'translateX(-100%)' }),
        animate('1s ease-in-out', style({transform: 'translateX(0%)', opacity: 1})),
      ])),
      query('.navigation-menu-item', stagger(200, [
        style({ transform: 'translateY(-100%)' }),
        animate('.25s cubic-bezier(0.615,.19,.305,.91)', style({transform: 'translateY(0%)', opacity: 1})),
      ])),
    ]),
    transition(':leave', [
      query('.navigation-menu-item', stagger(-200, [
        style({ transform: 'translateY(0%)' }),
        animate('.25s cubic-bezier(0.615,.19,.305,.91)', style({transform: 'translateY(-100%)', opacity: 0})),
      ])),
      query('.navigation-cover', stagger(-200, [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate('1s ease-in-out', style({transform: 'translateX(-100%)', opacity: 0})),
      ])),     
    ])
  ]);