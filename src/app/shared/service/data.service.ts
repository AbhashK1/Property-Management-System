import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs:AngularFirestore){}
    
    addproperty(property:any){
      property.id=this.afs.createId();
      return this.afs.collection("Property/").add(property);
    }

    getAllProperty(){
      return this.afs.collection("Property/").snapshotChanges();
    }

    updateProperty(property : any){
      return this.afs.doc("Property/"+property.id).update(property);
    }

    deleteProperty(id:string){
      return this.afs.doc("Property/"+id).delete();
    }

    getPropertyById(id:string){
      return this.afs.doc("Property/"+id).valueChanges();
    }

    getAllEnquiry(){
      return this.afs.collection("enquiry/").snapshotChanges();
    }

    addenquiry(enquiry:any){
      enquiry.id=this.afs.createId();
      return this.afs.collection("enquiry/").add(enquiry);
    }

    deleteenquiry(id:string){
      return this.afs.doc("enquiry/"+id).delete();
    }

    addcallback(callback:any){
      callback.id=this.afs.createId();
      return this.afs.collection("callback/").add(callback);
    }
}
