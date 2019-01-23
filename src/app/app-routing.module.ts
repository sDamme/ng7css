import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { TattoosComponent } from "./views/tattoos/tattoos.component";
import { TattooComponent } from './views/tattoo/tattoo.component';
import { CustomReuseStrategy } from './route-reuse-strategy';

const routes: Routes = [
  { path: '', redirectTo: 'tattoos', pathMatch: 'full' },
  { path: 'tattoos', component: TattoosComponent,
  children: [
    {path: '', redirectTo: '0', pathMatch: 'full'},
    {path: ':index', component: TattooComponent}
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
