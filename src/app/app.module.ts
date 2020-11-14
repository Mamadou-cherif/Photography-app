import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SocialComponent } from './components/social/social.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GalleryComponent,
    ServicesComponent,
    TestimonialsComponent,
    ClientsComponent,
    PricingComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    SocialComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
