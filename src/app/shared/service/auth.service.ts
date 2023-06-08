import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth : AngularFireAuth,
    private router : Router,
    private _snackBar:MatSnackBar,
  ) { }

  login(username: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.auth
        .signInWithEmailAndPassword(username, password)
        .then(result => {
          this.auth.authState.subscribe(async user => {
            if (user) {
              localStorage.setItem('user', JSON.stringify(user));
              resolve(true); // Credentials are correct
            }
          });
        })
        .catch(error => {
          console.log(error);
          resolve(false); // Credentials are wrong
        });
    });
  }

  signup(email:string, password:string){
    return this.auth
    .createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.openSnackBar("User Verified","OK");
      //alert("User Verified");
      this.router.navigate(['login']);
    })
    .catch(error=>{
      window.alert(error.message);
    })
  }
  

  async logout() {
    localStorage.setItem('user','null');
    await this.router.navigate(['']);
    location.reload();
  }

  isUserLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }

  openSnackBar(message:string, action:string){
    this._snackBar.open(message,action);
  }

}