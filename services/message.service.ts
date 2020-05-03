import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor( private firestore: AngularFirestore ) { }

  //collection firebase
  create_NewMessage(record) {
    return this.firestore.collection('Messages').add(record);
  }
  read_Message() {
    return this.firestore.collection('Messages').snapshotChanges();
  }
  read_One(id) {
    return this.firestore.collection('Messages').doc(id);
  }
  update_Message(recordID, record) {
    this.firestore.doc('Messages/' + recordID).update(record);
    console.log('updated');
  }
  delete_Message(record_id) {
    this.firestore.doc('Messages/' + record_id).delete();
  }
}
