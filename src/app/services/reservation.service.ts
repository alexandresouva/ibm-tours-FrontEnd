import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/Reservation';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.baseUrl);
  }

  findById(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Reservation>(url);
  }

  create(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.baseUrl, reservation);
  }

  delete(id: number): Observable<Reservation> {
    const url = `${this.baseUrl}/${id}/cancelar`;
    return this.http.delete<Reservation>(url);
  }

  edit(reservation: Reservation): Observable<Reservation> {
    const url = `${this.baseUrl}/${reservation.id}`;
    return this.http.put<Reservation>(url, reservation);
  }
}
