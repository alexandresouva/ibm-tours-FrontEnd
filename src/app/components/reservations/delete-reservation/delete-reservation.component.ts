import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-delete-reservation',
  templateUrl: './delete-reservation.component.html',
  styleUrls: ['./delete-reservation.component.css'],
})
export class DeleteReservationComponent implements OnInit {
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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((reservation) => {
      this.reservation = reservation;
    });
  }

  deleteReservation() {
    if (this.reservation.id) {
      this.service
        .delete(this.reservation.id)
        .pipe(
          catchError((error: any) => {
            console.error('Erro ao excluir reserva:', error);
            alert('Erro ao cancelar reserva.');
            return of(null);
          })
        )
        .subscribe(() => {
          alert('A reserva foi cancelada.');
          this.router.navigate(['/list']);
        });
    }
  }
  cancel() {
    this.router.navigate(['/list']);
  }
}
