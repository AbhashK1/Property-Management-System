import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private authApi : AuthService,
    private _snackBar:MatSnackBar)
    {}

  ngOnInit(): void {
    this.email='';
    this.password='';
  }

  login() {
    this.authApi.login(this.email, this.password).then(result=>{
      if(result===true){
      } else {
        this.openSnackBar("Invalid Credentials","OK");
        this.ngOnInit();
      }
    })
    }

    openSnackBar(message:string, action:string){
      this._snackBar.open(message,action);
    }
  }