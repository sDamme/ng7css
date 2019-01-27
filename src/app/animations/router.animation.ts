import {sequence, trigger, style, query as q, transition, animateChild} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%', left: '0', 'margin-right':'18px' })),
    sequence([
      query(':leave', animateChild()),

      query(':enter', animateChild()),
    ])
  ])
]);