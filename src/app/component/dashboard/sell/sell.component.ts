import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { DataService } from 'src/app/shared/service/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Property } from 'src/app/shared/model/property';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DeletepropertyComponent } from './deleteproperty/deleteproperty.component';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  propertyArr: Property[] =[];
  displayedColumns: string[] = ['p_name', 's_name', 'location', 'type', 'cost', 'action'];
  dataSource!: MatTableDataSource<Property>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog : MatDialog,
    private dataApi:DataService,
    private _snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getAllProperty();
  }

  editproperty(row:any) {
    if(row.id==null || row.p_name==null){
      return;
    }
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus=true;
    dialogConfig.data=row;
    dialogConfig.data.title="Edit Property";
    dialogConfig.data.buttonName="Update";

    const dialogRef=this.dialog.open(AddpropertyComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data =>{
      if(data){
        this.dataApi.updateProperty(data);
        this.openSnackBar("Updation Successful","Ok");
      }
    })
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

  deleteproperty(row:any) {
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus=true;
    dialogConfig.data={
      title: 'Delete Property',
      propertyName:row.name
    }
    const dialogRef=this.dialog.open(DeletepropertyComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data =>{
      if(data){
        this.dataApi.deleteProperty(row.id);
        this.openSnackBar("Deletion Successful","Ok");
      }
    })
  }

  viewproperty(row:any){
    window.open('/dashboard/sell/'+row.id,'_blank');
  }

  getAllProperty(){
    this.dataApi.getAllProperty().subscribe(res =>{
      this.propertyArr=res.map((e:any)=>{
        const data = e.payload.doc.data();
        data.id=e.payload.doc.id;
        return data;
      })
      //console.log(this.propertyArr);
      this.dataSource=new MatTableDataSource(this.propertyArr);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  openSnackBar(message:string, action:string){
    this._snackBar.open(message,action);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
