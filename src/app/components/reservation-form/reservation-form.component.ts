import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
  reservation = {
    id: 1,
    nomeHospede: 'Fulano de Tal',
    dataInicio: '2023-08-10',
    dataFim: '2023-08-15',
    quantidadePessoas: 4,
  };

  constructor() {}

  ngOnInit(): void {}

  createReservation(e: Event) {
    e.preventDefault();
    alert('Teste');
  }
}
