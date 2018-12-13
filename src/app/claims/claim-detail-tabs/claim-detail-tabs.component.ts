import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClaimService } from '../shared/claim/claim.service';

@Component({
  selector: 'app-claim-detail-tabs',
  templateUrl: './claim-detail-tabs.component.html'
})
export class ClaimDetailTabsComponent implements OnInit {
  message: string;
  claim: any;
  countries: any;
  titles: any;
  vaccineTypes: any;

  constructor(private _route: ActivatedRoute,
    private claimService: ClaimService) { }

  ngOnInit() {
    const vacNo  = +this._route.snapshot.paramMap.get('vacNo');
    this.claimService.getClaimByVacNo(vacNo).subscribe(data => {
      this.claim = data;
    });
    this.claimService.getAllReferences().subscribe(data => {
      this.countries = data.countries;
      this.titles = data.titles;
      this.vaccineTypes = data.vaccineTypes;
    });
  }

  processForm(): void {
    this.claimService.updateClaim(this.claim).subscribe(result => {
      this.message = 'Updates: ' +  Date();
      },
      error => this.message = error);
  }
}
