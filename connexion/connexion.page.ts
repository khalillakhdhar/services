import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../classes/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  user:Utilisateur;
  utilisateurs:any;
  active=false;

  constructor(private utilisateurService:UtilisateurService) { }
  

  ngOnInit() {
    this.user=new Utilisateur();
    this.getUsers();
  }
  getUsers()//récupére données user mel base lezm nbdlhom mel forma json en tb payload.doc.data()[""]
  {
        // subscribe permet de remplir le résultat
        this.utilisateurService.read_User().subscribe(data => {

          this.utilisateurs = data.map(e => {//data.map
            return {
            id: e.payload.doc.id,
            nom: e.payload.doc.data()["nom"], 
            prenom: e.payload.doc.data()["prenom"],
            email: e.payload.doc.data()["email"],
            telephone: e.payload.doc.data()["telephone"],
            password: e.payload.doc.data()["password"],
            adresse: e.payload.doc.data()["adresse"],
            type: e.payload.doc.data()["type"],
            active: e.payload.doc.data()["active"],
            categorie: e.payload.doc.data()["categorie"],

            };
          });
          console.log(this.utilisateurs);

        });
  }
  connexion()
  {
    for(let us of this.utilisateurs)//variable us pour le stockage des données dans la machine local de user
    {
      if((this.user.email==us.email)&&(this.user.password==us.password))
      {
        this.active=true;
        localStorage.setItem("id",us.id);
        localStorage.setItem("nom",us.nom);
        localStorage.setItem("prenom",us.prenom);
        localStorage.setItem("email",us.email);
        localStorage.setItem("telephone",us.telephone);
        localStorage.setItem("password",us.password);
        localStorage.setItem("adresse",us.adresse);
        localStorage.setItem("type",us.type);
        localStorage.setItem("active",us.active);
        localStorage.setItem("categorie",us.categorie);
        
        //console.log(this.utilisateurService.read_One(us.id));
        //alert("succés");
        window.location.replace("home");

      }
    }
    if(!this.active)
    alert("Verfier Vos Informations");

  }
  mdpoublie(){
    {
      window.location.replace("mdpoublie");
   }}
  visiteur(){
    {
      window.location.replace("home");
  }}
  inscription(){
    window.location.replace("inscription");
  }

}
