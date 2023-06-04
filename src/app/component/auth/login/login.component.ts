import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any = '';
  password: any = '';
  role:string='';
  roles: string[] = ['Admin','Buyer','Seller'];

  constructor(
    private authApi : AuthService)
    {}

  ngOnInit(): void {
    this.email='';
    this.password='';
  }

  login() {
    this.authApi.login(this.email, this.password);
  }

}