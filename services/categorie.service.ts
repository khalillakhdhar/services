import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class CategorieService {

  constructor( private firestore: AngularFirestore ) { }

//collection firebase
create_NewCategorie(record) {
  return this.firestore.collection('categories').add(record);
}
read_Categorie() {
  return this.firestore.collection('categories').snapshotChanges();
}
read_One(id) {
  return this.firestore.collection('categories').doc(id);
}
update_Categorie(recordID, record) {
  this.firestore.doc('categories/' + recordID).update(record);
  console.log('updated');
}
delete_Categorie(record_id) {
  this.firestore.doc('categories/' + record_id).delete();
}
}
