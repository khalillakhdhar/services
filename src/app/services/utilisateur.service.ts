import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor( private firestore: AngularFirestore ) { }

  //collection firebase
  create_NewUser(record) {
    return this.firestore.collection('Utilisateurs').add(record);
  }
  read_User() {
    return this.firestore.collection('Utilisateurs').snapshotChanges();
  }
  //${user.uid}
 
  read_One(id) {
    return this.firestore.collection('Utilisateurs').doc(id);
  }
  update_User(recordID, record) {
    this.firestore.doc('Utilisateurs/' + recordID).update(record);
    console.log('updated');
  }
  delete_User(record_id) {
    this.firestore.doc('Utilisateurs/' + record_id).delete();
  }
}
