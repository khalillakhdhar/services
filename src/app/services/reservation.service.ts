import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor( private firestore: AngularFirestore ) { }


  create_NewReservation(record) {//collection firebase
    return this.firestore.collection('Reservations').add(record);
  }
  read_Reservation() {
    return this.firestore.collection('Reservations').snapshotChanges();//
  }
  read_One(id) {
    return this.firestore.collection('Reservations').doc(id);
  }
  update_Reservation(recordID, record) {
    this.firestore.doc('Reservations/' + recordID).update(record);
    console.log('updated');
  }
  delete_Reservation(record_id) {
    this.firestore.doc('Reservations/' + record_id).delete();
  }
}
