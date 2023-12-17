// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsListComponent } from './produits-list/produits-list.component';
import { PanierComponent } from './panier/panier.component';
import { FactureComponent } from './facture/facture.component';
import { HistoriqueFactureComponent } from './historique-facture/historique-facture.component';

const routes: Routes = [
  { path: 'produits', component: ProduitsListComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'facture', component: FactureComponent },
  { path: 'historique-facture', component: HistoriqueFactureComponent },
  { path: '', redirectTo: '/produits', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
