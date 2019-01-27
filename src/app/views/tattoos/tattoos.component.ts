import { Component } from '@angular/core';
import { map, share, pairwise, startWith } from 'rxjs/operators';
import { Portfolio } from '../../portfolio';
import { tattoosPage} from '../../animations/tattoos.animation';
import { ArtistImagesService } from '../../artist-images.service';
import { TattoosRoutingService } from './tattoos-routing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ts-items',
  templateUrl: './tattoos.component.html',
  styleUrls: ['./tattoos.component.scss'],
  providers: [ TattoosRoutingService ],
  animations: [
    tattoosPage
  ]
})
export class TattoosComponent {
  portfolio: Portfolio[] = [];
  itemChange$: Observable<number>;
  next$: Observable<number>;
  prev$: Observable<number>;
  routeTrigger$: Observable<object>;
  constructor(artistImagesService: ArtistImagesService,
              tattoosRouting: TattoosRoutingService) {
    this.portfolio = artistImagesService.getTattoos();
    this.itemChange$ = tattoosRouting.itemChange$;

    this.setupRouting();
  }

  private setupRouting() {
    this.prev$ = this.itemChange$
      .pipe(
        map(index => index === 0 ? index : index - 1),
        share()
      );
    this.next$ = this.itemChange$
      .pipe(
        map(index => index === this.portfolio.length - 1 ? index : index + 1),
        share()
      );

    this.routeTrigger$ = this.itemChange$
      .pipe(
        startWith(0),
        pairwise(),
        map(([prev, curr]) => ({
          value: curr,
          params: {
            offsetEnter: prev > curr ? 100 : -100,
            offsetLeave: prev > curr ? -100 : 100
          }
        })),
      );
  }
}




