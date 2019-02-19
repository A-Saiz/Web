import { RoutingModule } from './routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import HomeComponent from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import MenuComponent from './components/menu/menu.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from "./components/footer/footer.component";

import MenuService from "../services/menu-service.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    ProjectsComponent,
    FooterComponent
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
