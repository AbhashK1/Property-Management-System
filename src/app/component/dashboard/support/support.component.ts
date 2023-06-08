import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  title = 'hello';
  contactForm!: FormGroup;
  isSubmit = true;
  submitMessage='';
  
  private myForm!:AngularFirestoreCollection<any>;


  constructor(
    private formBuilder: FormBuilder,
    private firestore:AngularFirestore,
    private dataApi:DataService) {
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.email]],
      message : [null,Validators.required],
      subject:[null,Validators.required]
    });
  }

  submitData(value:any){
    this.dataApi.addenquiry(value);
    this.isSubmit = true;
    this.submitMessage = 'Submitted Successfully';
    setTimeout(()=>{
      this.isSubmit = false;
    },8000);
  }
}
