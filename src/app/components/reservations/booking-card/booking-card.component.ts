import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { Status } from 'src/utils/enums/IStatus';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css'],
})
export class BookingCardComponent implements OnInit {
  @Input() reservation: Reservation = {
    id: 1,
    nomeHospede: '',
    dataInicio: new Date(), // Convert string to Date object
    dataFim: new Date(), // Convert string to Date object
    quantidadePessoas: 0,
    status: Status.CANCELADA,
  };

  reservationStatus(): string {
    if (this.reservation.status === Status.CONFIRMADA) {
      return 'status--confirmed';
    } else if (this.reservation.status === Status.PENDENTE) {
      return 'status--pending';
    } else {
      return 'status--canceled';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
