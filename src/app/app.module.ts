import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { BlogComponent } from './pages/blog.component';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    HomeComponent,
    NavComponent,

    // Pages
    BlogComponent,

    // Directives
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
