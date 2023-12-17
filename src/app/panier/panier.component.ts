// panier.component.ts
import { Component, OnInit } from '@angular/core';
import { PanierService } from './panier.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  products: Produit[] = [];

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  private loadCartItems(): void {
    this.products = this.panierService.getPanierItems();
  }

  removeFromCart(item: Produit): void {
    this.panierService.removeFromPanier(item);
    this.loadCartItems(); // Mettez à jour la liste après la suppression
  }

  calculateTotal(): number {
    let total = 0;
    
    for (const item of this.products) {
      total += item.price ;
    }

    console.log('Total without discount:', total);

    return total;
  }
}
