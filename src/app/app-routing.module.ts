import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CreateComponent } from './cars/create/create.component';
import { ListComponent } from './cars/list/list.component';
import { CreateBookingComponent } from './bookings/create-booking/create-booking.component';
import { BookingComponent } from './bookings/booking/booking.component';

const routes: Routes = [{
  path: 'login', component: LoginComponent
},
{
  path: 'create', component: CreateComponent
},
{
  path: '', component: ListComponent
},
{
  path: 'book', component: CreateBookingComponent
},
{
  path: 'bookings', component: BookingComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
