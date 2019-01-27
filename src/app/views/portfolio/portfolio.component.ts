import { Component, OnInit } from '@angular/core';
import { Portfolio } from "../../portfolio";
import { ArtistImagesService } from "../../artist-images.service";
import { ActivatedRoute, Router } from "@angular/router";
import { portfolioPage } from "./../../animations/portfolio.animation";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [portfolioPage],
  host: {'[@portfolioPage]': ''}
})
export class PortfolioComponent implements OnInit {
  portfolio: Portfolio[];

  constructor(artistImagesService: ArtistImagesService,  private route: ActivatedRoute, private router: Router) {

    this.portfolio = artistImagesService.getTattoos();
   }
 
  ngOnInit() {
  
  }

 
}
