import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {PeopleComponent} from "./components/people/people.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'people',
        component: PeopleComponent,
        data: {
          title: 'People'
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About'
        }
      },
      {
        path: '**',
        redirectTo: 'people'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
