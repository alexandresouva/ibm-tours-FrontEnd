import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/Reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private readonly API = 'http://localhost:8080/reservas';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.API);
  }

  findById(id: number) {
    const url = `${this.API}/${id}`;
    return this.http.get<Reservation>(url);
  }

  create(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.API, reservation);
  }

  delete(id: number): Observable<Reservation> {
    const url = `${this.API}/${id}/cancelar`;
    return this.http.delete<Reservation>(url);
  }

  edit(reservation: Reservation): Observable<Reservation> {
    const url = `${this.API}/${reservation.id}`;
    return this.http.put<Reservation>(url, reservation);
  }
}
