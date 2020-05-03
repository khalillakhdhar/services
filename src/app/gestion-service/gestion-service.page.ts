import { Component, OnInit } from '@angular/core';

import { Service } from '../classes/service';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-gestion-service',
  templateUrl: './gestion-service.page.html',
  styleUrls: ['./gestion-service.page.scss'],
})
export class GestionServicePage implements OnInit {
  service:Service;
  services:any;
  //service:Service;
  cache=true;

id:string;
  constructor(private serviceService :ServiceService) { }
  
  ngOnInit() {
    this.service=new Service();
    //this.service = new Service();
    this.id=localStorage.getItem("id");
    this.getServices();

  }
  getServices()
  {
        // subscribe permet de remplir le résultat
        this.serviceService.read_Service(this.id).subscribe(data => {

          this.services = data.map(e => {
            return {
            id: e.payload.doc.id,
            titre: e.payload.doc.data()["titre"],
            description: e.payload.doc.data()["description"],
            prix: e.payload.doc.data()["prix"],
            local: e.payload.doc.data()["local"],
            //image: e.payload.doc.data()["image"],
            };
          });
          console.log(this.services);

        });
  }
  delete(id)
  {
    if(confirm("vous êtes sur de vouloir supprimer?"))
    {
      this.serviceService.delete_Service(id);
    }
  }
 /* public form = [
    { val: 'ctg.service', isChecked: false },
  ];*/


  update(ser)
  {
    this.cache=false;
this.service=ser;

  }
  annuler()
  {
    this.cache=true;

  }
  modif()
  {
    let sr=Object.assign({},this.service);
    this.serviceService.update_Service(this.service.id,sr);
    alert("modifié avec succés");
    this.annuler();
  }
}


  
  