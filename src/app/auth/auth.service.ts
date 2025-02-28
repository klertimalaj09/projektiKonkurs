import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn = signal<boolean>(false);
  isLoggedIn= this._isLoggedIn.asReadonly();

  constructor(){
    const user = localStorage.getItem('user');
    if(user){
      this._isLoggedIn.set(true);
      console.log('WE HAVE USER');
    }
  }

  login(){
    this._isLoggedIn.set(true);

  }

  logout(){
    localStorage.removeItem('user');
    this._isLoggedIn.set(false);
  }
}
