import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {PeopleComponent} from './components/people/people.component';
import {AboutComponent} from './components/about/about.component';
import {MaterialModule} from "../material/material.module";
import {SharedModule} from "../shared/shared.module";
import {MenuComponent} from './components/menu/menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    PeopleComponent,
    AboutComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class HomeModule { }
