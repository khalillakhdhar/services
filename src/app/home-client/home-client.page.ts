import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.page.html',
  styleUrls: ['./home-client.page.scss'],
})
export class HomeClientPage implements OnInit {
categories:any;
  constructor(private categorieService:CategorieService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories()//récupére données user mel base lezm nbdlhom mel forma json en tb payload.doc.data()[""]
  {
        // subscribe permet de remplir le résultat
        this.categorieService.read_Categorie().subscribe(data => {

          this.categories = data.map(e => {//data.map
            return {
            id: e.payload.doc.id,
            titre: e.payload.doc.data()["titre"], 
            categorie: e.payload.doc.data()["categorie"], 
          

            };
          });
          console.log(this.categories);

        });
  }
}
