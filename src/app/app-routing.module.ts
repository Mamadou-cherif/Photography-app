import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path: "services", component: ServicesComponent},
  {path: "testimonials", component: TestimonialsComponent},
  {path: "gallery", component:GalleryComponent},
  {path: "pricing", component: PricingComponent},
  {path: "client", component: ClientsComponent},
  {path: "pricing", component:PricingComponent},
  {path: "intro", component: IntroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
