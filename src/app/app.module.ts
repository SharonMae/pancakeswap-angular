import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { FirstSectionComponent } from './homepage/sections/first-section/first-section.component';
import { BunnyComponent } from './homepage/animations/bunny/bunny.component';
=======
>>>>>>> feature/footer
import { FooterContainerComponent } from './footer/footer-container/footer-container.component';
import { FooterLinkComponent } from './footer/footer-link/footer-link.component';
import { FooterLogoComponent } from './footer/footer-logo/footer-logo.component';
import { FooterSocialComponent } from './footer/footer-social/footer-social.component';
<<<<<<< HEAD

=======
>>>>>>> feature/footer

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FirstSectionComponent,
    BunnyComponent,
=======
>>>>>>> feature/footer
    FooterContainerComponent,
    FooterLinkComponent,
    FooterLogoComponent,
    FooterSocialComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
