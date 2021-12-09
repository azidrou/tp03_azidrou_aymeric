import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaisieClientComponent } from './saisie-client/saisie-client.component';
import { FormsModule } from '@angular/forms';
import { AdresseComponent } from './adresse/adresse.component';
import { FooterComponent } from './footer/footer.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerificationFormulaireDirective } from './verification-formulaire.directive';
import { PhoneNumberPipe } from './phone-number.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SaisieClientComponent,
    AdresseComponent,
    FooterComponent,
    TetiereComponent,
    RecapitulatifComponent,
    VerificationFormulaireDirective,
    PhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
