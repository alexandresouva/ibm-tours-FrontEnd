import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { Status } from 'src/utils/enums/IStatus';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  constructor(private service: ReservationService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((list) => (this.reservationsList = list));
  }

  reservationsList: Reservation[] = [];
}
