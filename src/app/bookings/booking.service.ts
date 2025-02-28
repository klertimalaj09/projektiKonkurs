import { Car } from '../data/cars';
import { Booking } from './../data/booking';
import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _carToBook = signal<Car | null>(null);
  carToBook = this._carToBook.asReadonly();

  saveCarToBook(car: Car){
    this._carToBook.set(car);
  }












  private _bookings = signal<Booking[] | []>([]);
  bookings = this._bookings.asReadonly();



  getBookings(){

    const bookingsSaved = localStorage.getItem('bookings');
    const bookings = bookingsSaved ? JSON.parse(bookingsSaved) : []
    this._bookings.set(bookings);
  }

  saveBooking(booking: Booking){
    const bookingsSaved = localStorage.getItem('bookings');
    const bookings = bookingsSaved ? JSON.parse(bookingsSaved) : []

    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }
}
