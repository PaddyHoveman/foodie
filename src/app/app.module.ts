import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { NavComponent } from './components/nav/nav.component';
import { BlogComponent } from './pages/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,

    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
