import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-claim-detail-vaccinations',
  templateUrl: './claim-detail-vaccinations.component.html'
})
export class ClaimDetailVaccinationsComponent implements OnInit {

  newVaccination = {'vaccineType': '', 'date': '', 'age': '', 'country': '' } ;

  @Input() claim;
  @Input() countries;
  @Input() titles;
  @Input() vaccineTypes;

  constructor() { }

  ngOnInit() {
  }

}
