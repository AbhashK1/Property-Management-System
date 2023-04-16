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
}
