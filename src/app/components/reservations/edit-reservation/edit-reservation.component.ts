import { ReservationService } from 'src/app/services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { Status } from 'src/utils/enums/IStatus';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css'],
})
export class EditReservationComponent implements OnInit {
  statusOptions: string[] = Object.values(Status);

  reservation: Reservation = {
    id: 0,
    nomeHospede: '',
    dataInicio: new Date(),
    dataFim: new Date(),
    quantidadePessoas: 1,
    status: undefined,
  };
  constructor(
    private service: ReservationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  editReservation(e: Event) {
    e.preventDefault();
    this.service
      .edit(this.reservation)
      .pipe(
        catchError((error: any) => {
          console.error('Erro ao editar reserva:', error);
          return of(null);
        })
      )
      .subscribe(() => {
        alert('Sua reserva foi editada.');
        this.router.navigate(['/list']);
      });
  }

  cancel() {
    this.router.navigate(['/list']);
  }

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((reservation) => {
      this.reservation = reservation;
    });
  }
}
