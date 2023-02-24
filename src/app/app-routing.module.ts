import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './pages/game/fighter.component';
import { GamesComponent } from './pages/games/games.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'dashboard', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: GamesComponent, data: { title: 'Blog' } },
      {
        path: 'games',
        data: { title: 'Games' },
        children: [
          { path: '', redirectTo: 'games', pathMatch: 'full' },
          { path: 'fighter', component: GameComponent },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
