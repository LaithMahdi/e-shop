import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProduitsListComponent } from './produits-list/produits-list.component';
import { PanierComponent } from './panier/panier.component';
import { FactureComponent } from './facture/facture.component';
import { HistoriqueFactureComponent } from './historique-facture/historique-facture.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProduitsListComponent,
    PanierComponent,
    FactureComponent,
    HistoriqueFactureComponent,
    UserComponent ,     
   
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
      HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
