import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../shared/claim/claim.service';

@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html'
})
export class ClaimListComponent implements OnInit {
  claims: Array<any>;
  titles: Array<any>;
  vacNoFilter;
  claimantNinoFilter; claimantSurnameFilter;
  vaccinatedNinoFilter; vaccinatedSurnameFilter;

  constructor(private claimService: ClaimService) { }

  ngOnInit() {

    this.claimService.getAllTitles().subscribe(data => {
      this.titles = data;
    });
  }
  searchForClaim(): void {
    if (this.vacNoFilter !== undefined && this.vacNoFilter !== '') {
      console.log('Search by Vac No:' + this.vacNoFilter);
      this.claimService.getClaimByVacNo(this.vacNoFilter).subscribe(data => {
        this.claims = [];
        this.claims[0] = data;
        console.log(data);
      });
    } else {
      if (this.claimantNinoFilter !== undefined && this.claimantNinoFilter !== '') {
        console.log('Search by NINO:' + this.claimantNinoFilter);
        this.claimService.getClaimByClaimantNino(this.claimantNinoFilter).subscribe(data => {
          this.claims = data;
          console.log(data);
        });
      } else {
        if (this.claimantSurnameFilter !== undefined && this.claimantSurnameFilter !== '') {
          console.log('Search by Surname' + this.claimantSurnameFilter);
          this.claimService.getClaimByClaimantSurname(this.claimantSurnameFilter).subscribe(data => {
            this.claims = data;
            console.log(data);
          });
        } else {
          if (this.vaccinatedNinoFilter !== undefined && this.vaccinatedNinoFilter !== '') {
            console.log('Search by NINO:' + this.vaccinatedNinoFilter);
            this.claimService.getClaimByVaccinatedPersonNino(this.vaccinatedNinoFilter).subscribe(data => {
              this.claims = data;
              console.log(data);
            });
          } else {
            if (this.vaccinatedSurnameFilter !== undefined && this.vaccinatedSurnameFilter !== '') {
              console.log('Search by Surname' + this.vaccinatedSurnameFilter);
              this.claimService.getClaimByVaccinatedPersonSurname(this.vaccinatedSurnameFilter).subscribe(data => {
                this.claims = data;
                console.log(data);
              });
            } else {
              this.claimService.getAll().subscribe(data => {
                this.claims = data;
                console.log(data);
              });
            }
          }
        }
      }
    }
  }
}
