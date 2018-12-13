import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-claim-detail-vaccinated-person',
  templateUrl: './claim-detail-vaccinated-person.component.html'
})
export class ClaimDetailVaccinatedPersonComponent implements OnInit {

  @Input() claim;
  @Input() titles;

  constructor() { }

  ngOnInit() {
  }

}
