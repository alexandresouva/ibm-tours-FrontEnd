import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReservationFormComponent } from './components/reservations/reservation-form/reservation-form.component';
import { BookingCardComponent } from './components/reservations/booking-card/booking-card.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteReservationComponent } from './components/reservations/delete-reservation/delete-reservation.component';
import { EditReservationComponent } from './components/reservations/edit-reservation/edit-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReservationFormComponent,
    BookingCardComponent,
    ReservationsComponent,
    DeleteReservationComponent,
    EditReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
