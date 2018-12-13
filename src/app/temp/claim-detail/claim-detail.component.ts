import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimService } from '../../claims/shared/claim/claim.service';

@Component({
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrls: ['./claim-detail.component.css']
})
export class ClaimDetailComponent implements OnInit {

  message: string;
  claim: any;
  titles: any;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private claimService: ClaimService) { }

  ngOnInit() {
    const vacNo  = +this._route.snapshot.paramMap.get('vacNo');
    this.claimService.getClaimByVacNo(vacNo).subscribe(data => {
      this.claim = data;
      console.log('ClaimDetailComponent getClaimByVacNo');
      console.log(data);
    });
    this.claimService.getAllTitles().subscribe(data => {
      this.titles = data;
      console.log('ClaimDetailComponent getAllTitles');
      console.log(data);
    });
  }
}
