import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { BlogComponent } from './pages/blog.component';

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
      { path: 'home', component: BlogComponent, data: { title: 'Blog' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
