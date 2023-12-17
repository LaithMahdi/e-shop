// historique-facture.component.ts
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-historique-facture',
  templateUrl: './historique-facture.component.html',
  styleUrls: ['./historique-facture.component.css']
})
export class HistoriqueFactureComponent {
  historique= this.dataService. getDistincDateFacture();

 
  constructor(private dataService: DataService) {
    
  }
}
