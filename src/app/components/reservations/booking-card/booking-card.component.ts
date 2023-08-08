import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/utils/enums/IStatus';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css'],
})
export class BookingCardComponent implements OnInit {
  @Input() reservation = {
    id: 1,
    nomeHospede: 'Fulano de Tal',
    dataInicio: '2023-08-10',
    dataFim: '2023-08-15',
    quantidadePessoas: 4,
    status: Status.CANCELADA,
  };

  constructor() {}

  ngOnInit(): void {}
}
