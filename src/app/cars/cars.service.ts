import { Injectable, signal } from "@angular/core";
import { Car } from "../data/cars";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  savedCars: Car[] = [];
  private _cars = signal<Car[] | []>([]);
  cars = this._cars.asReadonly();

  getCars(){
    const cars = localStorage.getItem('cars');
    const loadedCars = cars ? JSON.parse(cars) : [];
    this._cars.set(loadedCars);
  }

  setCars(car: Car){
    const savedCars = localStorage.getItem('cars');
    this.savedCars = savedCars ? JSON.parse(savedCars) : [];

    this.savedCars.push(car);
    localStorage.setItem('cars', JSON.stringify(this.savedCars));

  }
}
