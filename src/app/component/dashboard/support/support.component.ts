import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';

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


  constructor(private formBuilder: FormBuilder,private firestore:AngularFirestore) {

  }

  ngOnInit() {
    this.myForm = this.firestore.collection('enquiry')
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.email]],
      message : [null,Validators.required],
      subject:[null,Validators.required]

    });
  }

  submitData(value:any){
    this.myForm.add(value).then(res=>{
      this.submitMessage='Submitted Successfully';
    })
    .catch(err=>{
      console.log(err);
    })

    this.isSubmit = true;
    this.submitMessage = 'Submitted Successfully';
    setTimeout(()=>{
      this.isSubmit = false;
    },8000);
  }
}
