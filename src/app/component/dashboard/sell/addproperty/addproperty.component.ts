import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit{
  
  form!: FormGroup;
  title!: string;
  p_name!:string;
  s_name!:string;
  location!:string;
  mobile!:string;
  email!:string;
  cost!:string;
  type!:string;
  id!:string;
  buttonName!:string;

  types: string[] =['Flat 2BHK','Flat 3BHK', 'House','PentHouse','Duplex'];

  constructor(
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) data:any,
    private dialogRef : MatDialogRef<AddpropertyComponent>
  ) { 
    this.title=data.title;
    this.id=data.id;
    this.p_name=data.p_name;
    this.s_name=data.s_name;
    this.mobile=data.mobile;
    this.email=data.email;
    this.type=data.type;
    this.location=data.location;
    this.cost=data.cost;
    this.buttonName=data.buttonName;
  }

  ngOnInit(): void {
    this.form=this.fb.group({
      id:[this.id,[]],
      p_name:[this.p_name,[Validators.required]],
      s_name:[this.s_name,[Validators.required]],
      mobile:[this.mobile, [Validators.required,Validators.maxLength(10), Validators.minLength(10)]],
      email:[this.email,[Validators.required, Validators.email]],
      type:[this.type,[Validators.required]],
      location:[this.location,[Validators.required]],
      cost:[this.cost,[Validators.required]],
    })
  }

  cancelRegistration(){
    this.dialogRef.close();
  }

  registerProperty(){
    this.dialogRef.close(this.form.value);
  }
}
