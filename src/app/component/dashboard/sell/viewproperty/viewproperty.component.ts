import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RequestcallbackComponent } from './requestcallback/requestcallback.component';

@Component({
  selector: 'app-viewproperty',
  templateUrl: './viewproperty.component.html',
  styleUrls: ['./viewproperty.component.css']
})
export class ViewpropertyComponent implements OnInit {

  id!:any;
  propertyObj!:any;
  constructor(private route: ActivatedRoute,
    private dataApi:DataService,
    public dialog : MatDialog,
    ){
    this.id=route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getPropertyById();
  }

  getPropertyById(){
    this.dataApi.getPropertyById(this.id).subscribe(res =>{
      this.propertyObj=res;
    })
  }

  isSeller(): boolean {
    const isSeller = localStorage.getItem('isSeller');
    return isSeller === 'true';
  } 

  contactSeller(){
    var mailtext="mailto:"+this.propertyObj.email;
    window.location.href = mailtext;
  }

  requestCallback(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus=true;
    /*dialogConfig.data={
      title: 'Register Property',
      buttonName : 'Register'
    }*/
    const dialogRef=this.dialog.open(RequestcallbackComponent, dialogConfig);
  }

}
