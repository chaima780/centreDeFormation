import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Formation } from '../Models/formation.model';
@Injectable({
  providedIn: 'root'
})
export class FormationServicesService {

  constructor(private firestore: AngularFirestore) { }

  getFormation() {
    return this.firestore.collection("formation").snapshotChanges();
  }

  getFormationbyId(id) {
    return this.firestore.collection("formation").doc(id).get();
  }

  createFormation(formation: Formation){
    return this.firestore.collection('formation').add(formation);
  }

  updateFormation(formation: Formation){
    delete formation.id;
    this.firestore.doc('formation/' + formation.id).update(formation);
  }

  deleteFormation(id: string){
    this.firestore.doc('formation/' + id).delete();
  }
}