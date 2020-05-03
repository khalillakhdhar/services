import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../classes/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
user:Utilisateur;
data:any;
  constructor(private utilisateurService:UtilisateurService) { }
id:string;
  ngOnInit() {
    this.user=new Utilisateur();
    this.read();
  }
  read()
  {
    this.id=localStorage.getItem("id");
   this.data= this.utilisateurService.read_One(this.id);
   console.log(this.data);
   this.user.id=localStorage.getItem("id");
   this.user.nom=localStorage.getItem("nom");
   this.user.prenom=localStorage.getItem("prenom");
   this.user.telephone=parseInt(localStorage.getItem("telephone"));
   this.user.password=localStorage.getItem("password");
   this.user.adresse=localStorage.getItem("adresse");
   this.user.email=localStorage.getItem("email");
   console.log(this.user);
  }
modifier()
{
  let us=Object.assign({},this.user);
  this.utilisateurService.update_User(this.user.id,us);
  alert("modifié avec succés");
}
}
