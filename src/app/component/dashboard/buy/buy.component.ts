import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Property } from 'src/app/shared/model/property';
import { DataService } from 'src/app/shared/service/data.service';

export interface Tile{
  id:string;
  cost:string;
  location:string;
}

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit{

  propertyArr: Property[] =[];
  tiles: Tile[] = [];
  constructor(
    public grid:MatGridListModule,
    private dataApi:DataService,
  ){}
  ngOnInit(): void {
    this.getAllProperty();
  }

  viewproperty(id:any){
    window.open('/dashboard/sell/'+id,'_blank');
  }

  getAllProperty(){
    this.dataApi.getAllProperty().subscribe(res =>{
      this.propertyArr=res.map((e:any)=>{
        const data = e.payload.doc.data();
        data.id=e.payload.doc.id;
        return data;
      })
      //console.log(this.propertyArr);
      for(let i=0;i<this.propertyArr.length;i++){
        var id=this.propertyArr[i].id;
        var cost=this.propertyArr[i].cost;
        var location=this.propertyArr[i].location;
        this.tiles.push({id,cost,location});
      }
    })
  }
}
