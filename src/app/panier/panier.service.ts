// panier.service.ts
import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  private items: Produit[] = [];

  addToPanier(item: Produit): void {
    this.items.push(item);
  }

  removeFromPanier(item: Produit): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getPanierItems(): Produit[] {
    return this.items;
  }

  constructor() {}
}
