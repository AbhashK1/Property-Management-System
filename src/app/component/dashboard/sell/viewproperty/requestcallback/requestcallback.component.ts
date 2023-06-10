import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-requestcallback',
  templateUrl: './requestcallback.component.html',
  styleUrls: ['./requestcallback.component.css']
})
export class RequestcallbackComponent {
  constructor(private dialogRef : MatDialogRef<RequestcallbackComponent>,
    private dataApi:DataService){
  }

  name!: string;
  email!: string;
  contact!:string;

  submit(){
    const callback = {
      name: this.name,
      email: this.email,
      contact: this.contact
    };
    this.dataApi.addcallback(callback);
    this.dialogRef.close();
  }
}
