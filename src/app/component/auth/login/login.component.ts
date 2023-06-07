import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
    private _snackBar:MatSnackBar,
    private router : Router
    )
    {}

  ngOnInit(): void {
    this.email='';
    this.password='';
  }

  login() {
    this.authApi.login(this.email, this.password).then(async result=>{
      if(result===true){
        if(this.role=='Buyer')
        {
          await this.router.navigate(['/dashboard/buy']);
          location.reload();
        }
        else if(this.role=='Seller')
        {
          localStorage.setItem('isSeller', 'true');
          await this.router.navigate(['/dashboard/sell']);
          location.reload();
        }
        else if(this.role=="Admin"){
          localStorage.setItem('isAdmin', 'true');
          await this.router.navigate(['/dashboard/buy']);
          location.reload();
        }
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