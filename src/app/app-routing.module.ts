import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { TattoosComponent } from "./views/tattoos/tattoos.component";
import { TattooComponent } from './views/tattoo/tattoo.component';
import { CustomReuseStrategy } from './route-reuse-strategy';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { NavigationComponent } from "./views/navigation/navigation.component";

const routes: Routes = [
  { path: '', redirectTo: 'tattoos', pathMatch: 'full' },
  { path: 'navigation', component: NavigationComponent, data: {animation:  'navigation'} },
  { path: 'portfolio', component: PortfolioComponent, data: {animation:  'portfolio'} },
  { path: 'tattoos', component: TattoosComponent, data: {animation:  'tattoos'},
  children: [
    {path: '', redirectTo: '0', pathMatch: 'full'},
    {path: ':index', component: TattooComponent, data: {animation:  'tattoo'}}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
