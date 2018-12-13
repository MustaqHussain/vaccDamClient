import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ClaimService } from './claims/shared/claim/claim.service';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ClaimListComponent } from './claims/claim-list/claim-list.component';
import { ClaimDetailComponent } from './temp/claim-detail/claim-detail.component';
import { ClaimDetailVaccinationsComponent } from './claims/claim-detail-vaccinations/claim-detail-vaccinations.component';
import { ClaimDetailVaccinatedPersonComponent } from './claims/claim-detail-vaccinated-person/claim-detail-vaccinated-person.component';
import { ClaimDetailClaimantComponent } from './claims/claim-detail-claimant/claim-detail-claimant.component';
import { ClaimDetailTabsComponent } from './claims/claim-detail-tabs/claim-detail-tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ClaimListComponent,
    WelcomeComponent,
    ClaimDetailComponent,
    ClaimDetailVaccinationsComponent,
    ClaimDetailVaccinatedPersonComponent,
    ClaimDetailClaimantComponent,
    ClaimDetailTabsComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'claims', component: ClaimListComponent },
      { path: 'claims/:vacNo', component: ClaimDetailTabsComponent }
    ]),
    BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [ClaimService],
  bootstrap: [AppComponent]
})
export class AppModule { }
