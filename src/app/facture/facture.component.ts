// facture.component.ts
import { Component, OnInit  } from '@angular/core';
import { PanierService } from '../panier/panier.service';
import { DataService } from '../data.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  cartItems: Produit[] = [];
  facture=this.dataservice.getFacture()
  constructor(private panierService: PanierService , private dataservice:DataService) {}

  ngOnInit(): void {
    this.cartItems = this.panierService.getPanierItems();
  }

  generateInvoice(): void {
    // Ajoutez ici la logique pour générer la facture (par exemple, envoyer une requête au backend)
  }
}
