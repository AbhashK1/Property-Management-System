import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Enquiry } from 'src/app/shared/model/enquiry';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css'],
})
export class EnquiryComponent implements OnInit{

  enquiryArr: Enquiry[] =[];

  constructor(
    private dataApi:DataService,
  ) { }

  ngOnInit(): void {
    this.getAllEnquiry();
  }

  getAllEnquiry(){
    this.dataApi.getAllEnquiry().subscribe(res =>{
      this.enquiryArr=res.map((e:any)=>{
        const data = e.payload.doc.data();
        data.id=e.payload.doc.id;
        return data;
      })
    })
  }

  delete(id:any){
    console.log(id);
    if (confirm("Press OK to delete") == true) {
      this.dataApi.deleteenquiry(id);
    } else {
    }
  }

  reply(email:string){
    var mailtext="mailto:"+email;
    window.location.href = mailtext;
  }
}
