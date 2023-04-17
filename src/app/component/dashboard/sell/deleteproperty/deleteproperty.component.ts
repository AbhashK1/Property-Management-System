import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddpropertyComponent } from '../addproperty/addproperty.component';

@Component({
  selector: 'app-deleteproperty',
  templateUrl: './deleteproperty.component.html',
  styleUrls: ['./deleteproperty.component.css']
})
export class DeletepropertyComponent implements OnInit{
  propertyName!:string;
  title!:string;
  constructor(
    @Inject(MAT_DIALOG_DATA) data:any,
    private dialogRef: MatDialogRef<DeletepropertyComponent>
  ){
    this.propertyName=data.propertyName;
    this.title=data.title;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  close(){
    this.dialogRef.close();
  }

  delete(){
    const deleteProperty=true;
    this.dialogRef.close(deleteProperty);
  }
}
