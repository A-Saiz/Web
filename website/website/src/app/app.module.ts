import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";
import { NgxPageScrollModule } from "ngx-page-scroll";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from "./components/footer/footer.component";

import { AboutPageImagesService } from "../services/about-page-images.service";
import { LinkService } from "../services/link.service";
import { MenuService } from "../services/menu-service.service";
import { HereComponent } from './components/here/here.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalcontentComponent } from './components/modalcontent/modalcontent.component';

import { HttpErrorInterceptor } from "../errors/http-error-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    ProjectsComponent,
    FooterComponent,
    HereComponent,
    ModalComponent,
    ModalcontentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ],
  providers: [
    HereComponent,
    AboutPageImagesService,
    LinkService,
    MenuService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
