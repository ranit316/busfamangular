import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login/login.service';
import { response } from 'express';
import { read } from 'fs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  router = inject(Router);
  password: string = '';
  showPassword: boolean = false;


  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  loginObj: any = {
    email: '',
    password: '',
  }

  constructor(private loginService: LoginService) { }

  onLogin() {
    // debugger;
    const formValue = this.loginObj;
    this.loginService.loginApi(formValue).subscribe({
      next: (response: any) => {
        // console.log('Api Response:', response);
        if (response.success) {
          localStorage.setItem('token', response.data.token);
          this.router.navigateByUrl('/admin');
        } else {
          alert(response.message);
        }
      }
    });
  }
}
