import { Component, OnInit } from '@angular/core';
import { Status } from 'src/utils/enums/IStatus';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  reservationsList = [
    // {
    //   id: 1,
    //   nomeHospede: 'Fulano de Tal',
    //   dataInicio: '2023-08-10',
    //   dataFim: '2023-08-15',
    //   quantidadePessoas: 4,
    //   status: Status.CANCELADA,
    // },
    // {
    //   id: 2,
    //   nomeHospede: 'Fulano de Tal',
    //   dataInicio: '2023-08-10',
    //   dataFim: '2023-08-15',
    //   quantidadePessoas: 4,
    //   status: Status.CANCELADA,
    // },
    // {
    //   id: 2,
    //   nomeHospede: 'Fulano de Tal',
    //   dataInicio: '2023-08-10',
    //   dataFim: '2023-08-15',
    //   quantidadePessoas: 4,
    //   status: Status.CANCELADA,
    // },
  ];
}
