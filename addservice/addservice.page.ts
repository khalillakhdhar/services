import { Component, OnInit } from '@angular/core';
import { Service } from '../classes/service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.page.html',
  styleUrls: ['./addservice.page.scss'],
})
export class AddservicePage implements OnInit {
service:Service
  constructor( private serviceService:ServiceService) { }

  ngOnInit() {
    this.service=new Service();
    this.service.categorie=localStorage.getItem("categorie");
    this.service.userid=localStorage.getItem("id");

  }
  addservice()
  {

    const record = {};
    record['titre'] = this.service.titre;
    record['categorie'] = this.service.categorie;
    record['local'] = this.service.local;
    record['userid'] = this.service.userid;
    record['prix'] = this.service.prix;
    record['description'] = this.service.description;
    record['etat'] = 'libre';

    this.serviceService.create_NewService(record,this.service.userid).then(resp => {
      console.log(resp);
      alert('Votre compte est ajouté avec succés!');
      window.location.replace('addservice');
  
         })
           .catch(error => {
             console.log(error);
           });
          }

}
