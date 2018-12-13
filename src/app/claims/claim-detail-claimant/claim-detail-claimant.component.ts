import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-claim-detail-claimant',
  templateUrl: './claim-detail-claimant.component.html'
})
export class ClaimDetailClaimantComponent implements OnInit {

  @Input() claim;
  @Input() titles;

  constructor() { }

  ngOnInit() {
  }

}
