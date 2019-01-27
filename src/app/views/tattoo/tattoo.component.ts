import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Portfolio } from "../../portfolio";
import { TattoosRoutingService } from "../tattoos/tattoos-routing.service";
import { ArtistImagesService } from "../../artist-images.service";

@Component({
  selector: 'app-tattoo',
  templateUrl: './tattoo.component.html',
  styleUrls: ['./tattoo.component.scss']
})
export class TattooComponent {
  portfolio: Portfolio;

  constructor(route: ActivatedRoute, artistImagesService: ArtistImagesService, tattoosRouting: TattoosRoutingService) {
    const { index } = route.snapshot.params;

    this.portfolio = artistImagesService.getTattooByIndex(index);

    tattoosRouting.itemChange$.next(+index);
  }

   

}
