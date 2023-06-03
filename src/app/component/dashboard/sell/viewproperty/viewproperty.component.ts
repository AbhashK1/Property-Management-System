import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';

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
    ){
    this.id=route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getPropertyById();
  }

  getPropertyById(){
    this.dataApi.getPropertyById(this.id).subscribe(res =>{
      this.propertyObj=res;
      console.log(this.propertyObj);
    })
  }

}
