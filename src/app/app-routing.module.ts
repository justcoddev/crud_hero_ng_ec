import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateHeroComponent } from './components/update-hero/update-hero.component';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';

const routes: Routes = [

  {
    path: '', component: UpdateHeroComponent
  },
  {
    path: 'create-hero', component: CreateHeroComponent
  },
  {
    path: 'edit-hero/:id', component: CreateHeroComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
