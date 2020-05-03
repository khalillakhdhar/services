import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor( private firestore: AngularFirestore ) { }

  //collection firebase
  create_NewEvaluation(record) {
    return this.firestore.collection('Evaluations').add(record);
  }
  read_Evaluation() {
    return this.firestore.collection('Evaluations').snapshotChanges();
  }
  read_One(id) {
    return this.firestore.collection('Evaluations').doc(id);
  }
  update_Evaluation(recordID, record) {
    this.firestore.doc('Evaluations/' + recordID).update(record);
    console.log('updated');
  }
  delete_Evaluation(record_id) {
    this.firestore.doc('Evaluations/' + record_id).delete();
  }
}
