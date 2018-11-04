import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MatDividerModule } from '@angular/material/divider';
import { routes } from './app-routes';
import { RouterModule } from '@angular/router';
import { CardComponent } from './shared/card/card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faVk } from '@fortawesome/free-brands-svg-icons';
import { PricingComponent } from './pages/pricing/pricing.component';
// Add an icon to the library for convenient access in other components
library.add(faFacebook, faInstagram, faVk);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GalleryComponent,
    CardComponent,
    FooterComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
