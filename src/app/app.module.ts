import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./auth/login/login.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './cars/create/create.component';
import { ListComponent } from './cars/list/list.component';
import { CarComponent } from './cars/car/car.component';
import { CreateBookingComponent } from './bookings/create-booking/create-booking.component';
import { BookingComponent } from './bookings/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    ListComponent,
    CarComponent,
    CreateBookingComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
