// produits-list.component.ts
import { Component ,Input } from '@angular/core';
import { DataService } from '../data.service';
import { PanierService } from '../panier/panier.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-produits-list',
  templateUrl: './produits-list.component.html',
  styleUrls: ['./produits-list.component.css']
})
export class ProduitsListComponent {
  products = this.dataService.getAllProducts();
item = this.dataService.getProductById();

@Input() data :any ={}
  constructor(private dataService: DataService , private panierservice:PanierService) {}

 
    add(item: Produit) {
      this.panierservice.addToPanier(item);
      console.log('item ',item);
    }
    
  
}
