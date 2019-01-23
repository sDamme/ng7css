import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TattoosRoutingService {
  itemChange$ = new BehaviorSubject<number>(0);
}