import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio';

@Injectable()
export class ArtistImagesService {
  private portfolio: Portfolio[] = [
    { id: 1, name: 'Japanese Samurai', style: "Traditional New School", imagePath: '../assets/images/janis_tattoos/tattoo_1.jpg' },
    { id: 2, name: 'Space Face', style: "New School", imagePath: '../assets/images/janis_tattoos/tattoo_2.jpg' },
    { id: 3, name: 'Fox', style: "Traditional", imagePath: '../assets/images/janis_tattoos/tattoo_3.jpg' },
    { id: 4, name: 'Naked Woman', style: "Traditional", imagePath: '../assets/images/janis_tattoos/tattoo_4.jpg' },
    { id: 5, name: 'Demonic Minni', style: "New School", imagePath: '../assets/images/janis_tattoos/tattoo_5.jpg' },
    { id: 6, name: 'Best sleev in the world', style: "New School", imagePath: '../assets/images/janis_tattoos/tattoo_6.jpg' }
  ];
 
  getTattoos(): Portfolio[] {
    return [...this.portfolio];
  }

  getTattooByIndex(index: number): Portfolio {
    return this.portfolio[index];
  }


}

