import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from "@angular/material";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HereComponent } from './components/here/here.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalcontentComponent } from './components/modalcontent/modalcontent.component';
import { NewsComponent } from './components/news/news.component';

import { AboutPageImagesService } from "../services/about-page-images.service";
import { LinkService } from "../services/link.service";
import { MenuService } from "../services/menu-service.service";
import { ModalService, ModalSate } from 'src/services/modal.service';
import { NewsApiService } from 'src/services/news-api.service';

import { HttpErrorInterceptor } from "../errors/http-error-interceptor";
import { ConfirmTemplateDirective } from './directives/confirm-template.directive';

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
    ModalcontentComponent,
    ConfirmTemplateDirective,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [
    NewsApiService,
    ModalService,
    ModalSate,
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
