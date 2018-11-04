import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PricingComponent } from './pages/pricing/pricing.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'pricing', component: PricingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];