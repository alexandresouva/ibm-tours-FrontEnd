import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationFormComponent } from './components/reservations/reservation-form/reservation-form.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { DeleteReservationComponent } from './components/reservations/delete-reservation/delete-reservation.component';
import { EditReservationComponent } from './components/reservations/edit-reservation/edit-reservation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'create',
    component: ReservationFormComponent,
  },
  {
    path: 'list',
    component: ReservationsComponent,
  },
  {
    path: 'delete/:id',
    component: DeleteReservationComponent,
  },
  {
    path: 'edit/:id',
    component: EditReservationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
