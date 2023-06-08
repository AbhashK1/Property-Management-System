import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit{
  constructor(
    public authApi:AuthService
  ){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
