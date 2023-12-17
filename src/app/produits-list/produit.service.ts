import { Injectable  ,Input} from '@angular/core';
import { PanierService } from '../panier/panier.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  @Input() product: any; 

  constructor(private panierservice: PanierService) {}

  addToCart(product: any) {
    this.panierservice.addToPanier(product);
  }
}
