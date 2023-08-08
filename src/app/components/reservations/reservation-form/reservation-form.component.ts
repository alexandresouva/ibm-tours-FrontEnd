import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { Status } from 'src/utils/enums/IStatus';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
  reservation: Reservation = {
    nomeHospede: '',
    dataInicio: new Date(),
    dataFim: new Date(),
    quantidadePessoas: 1,
  };

  constructor(
    private service: ReservationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  createReservation() {
    this.service.create(this.reservation).subscribe(
      (response) => {
        alert('Reserva criada com sucesso.');
        this.router.navigate(['/list']);
      },
      (error) => {
        console.error('Erro ao criar reserva:', error);
        alert('Erro ao criar a reserva.');
      }
    );
  }
}
