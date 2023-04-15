import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddpropertyComponent } from './addproperty/addproperty.component';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  constructor(
    public dialog : MatDialog,
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
      }
    })
  }
}
