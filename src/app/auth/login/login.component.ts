import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { users } from '../../data/users';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm: FormGroup;
  appUsers = users;
  authService = inject(AuthService);
  error: string = '';
  router = inject(Router)


  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  login(){
    // email and password from form
    if(this.loginForm.valid){
      const email = this.loginForm.controls['email'].value;
      const password = this.loginForm.controls['password'].value;

      const userFound = this.appUsers.filter(user => user.email === email);
      if(userFound.length > 0){
        if(userFound[0].password === password){

          localStorage.setItem('user', email);
          this.authService.login();
          this.router.navigate([''])
        } else {
          this.error = 'The password is not correct';
        }
      } else {
        this.error = 'The user does not exists';
      }
    }

    console.log(this.loginForm.value)
  }

}
