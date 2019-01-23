import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TattoosComponent } from './views/tattoos/tattoos.component';
import { TattooComponent } from './views/tattoo/tattoo.component';
import { ArtistImagesService } from "./artist-images.service";
import { TattoosRoutingService } from "./views/tattoos/tattoos-routing.service";


@NgModule({
  declarations: [
    AppComponent,
    TattoosComponent,
    TattooComponent
    ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ArtistImagesService, TattoosRoutingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
