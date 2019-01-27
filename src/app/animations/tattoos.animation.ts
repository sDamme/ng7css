import {trigger, animate, style, group, query as q, transition} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const tattoosPage =
      trigger('tattoosPage', [
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
            ]),
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
            ]),
          ])
        ]),
      ]);
    