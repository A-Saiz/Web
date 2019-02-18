import { RoutingModule } from './routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import HomeComponent from './home/home/home.component';
import { AboutComponent } from './About/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';
import MenuComponent from './menu/menu/menu.component';
import { ProjectsComponent } from './projects/projects/projects.component';

import MenuService from "../services/menu-service.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
