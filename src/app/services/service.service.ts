import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private firestore: AngularFirestore ) { }


  create_NewService(record,iduser) {//collection firebase
    return this.firestore.collection('Utilisateurs/'+iduser+'/Services').add(record);
  }
  read_Service(iduser) {
    return this.firestore.collection('Utilisateurs/'+iduser+'/Services').snapshotChanges();//
  }
  read_One(id) {
    return this.firestore.collection('Utilisateurs/Services').doc(id);
  }
  read_byuser(id) {
    return this.firestore.collection('Utilisateur/'+id+'Services').snapshotChanges;
  }
  update_Service(recordID, record) {
    let iduser=localStorage.getItem("id");

    this.firestore.doc('Utilisateurs/'+iduser+'/Services/' + recordID).update(record);
    console.log('updated');
  }
  delete_Service(record_id) {
    let iduser=localStorage.getItem("id");
    this.firestore.doc('Utilisateurs/'+iduser+'/Services/' + record_id).delete();
  }
}
