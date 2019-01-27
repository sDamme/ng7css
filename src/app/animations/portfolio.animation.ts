import {trigger, stagger, animate, style, query as q, transition} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const portfolioPage = trigger('portfolioPage', [
    transition(':enter', [
      query('.masonry', style({ opacity: 0 })),
      query('.masonry', stagger(150, [
        style({ transform: 'translateY(100%)' }),
        animate('1s ease-in-out', style({transform: 'translateY(0%)', opacity: 1})),
      ])),
    ]),
    transition(':leave', [
      query('.masonry', stagger(150, [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate('1s ease-in-out', style({transform: 'translateY(100%)', opacity: 0})),
      ])),     
    ])
  ]);