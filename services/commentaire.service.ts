import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor( private firestore: AngularFirestore ) { }

  //collection firebase
  create_NewCommentaire(record) {
    return this.firestore.collection('Commentaires').add(record);
  }
  read_Commentaire() {
    return this.firestore.collection('Commentaires').snapshotChanges();
  }
  read_One(id) {
    return this.firestore.collection('Commentaires').doc(id);
  }
  update_Commentaire(recordID, record) {
    this.firestore.doc('Commentaires/' + recordID).update(record);
    console.log('updated');
  }
  delete_Commentaire(record_id) {
    this.firestore.doc('Commentaires/' + record_id).delete();
  }
}
