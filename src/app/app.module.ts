import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { BookingCardComponent } from './components/reservations/booking-card/booking-card.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ReservationsComponent } from './components/reservations/reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReservationFormComponent,
    BookingCardComponent,
    ReservationsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
