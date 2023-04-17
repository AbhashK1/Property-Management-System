import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { DataService } from 'src/app/shared/service/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  constructor(
    public dialog : MatDialog,
    private dataApi:DataService,
    private _snackBar:MatSnackBar
  ) { }
  ngOnInit(): void {
  }

  addproperty() {
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus=true;
    dialogConfig.data={
      title: 'Register Property',
      buttonName : 'Register'
    }
    const dialogRef=this.dialog.open(AddpropertyComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data =>{
      if(data){
        this.dataApi.addproperty(data);
        this.openSnackBar("Registration Successful","Ok");
      }
    })
  }

  openSnackBar(message:string, action:string){
    this._snackBar.open(message,action);
  }
}
