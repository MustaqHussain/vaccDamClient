import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClaimService {

  private _urlBase = '//localhost:8080/';

  titles: any;

  constructor(private http: HttpClient) {
    this.getAllTitles().subscribe(data => {
      this.titles = data;
     });
  }

  getAll(): Observable<any> {
    return this.http.get( this._urlBase + 'claim/getall');
  }

  getClaimByID( id: string ): Observable<any> {
    return this.http.get(this._urlBase + 'claim/id=' + id );
  }

  getClaimByVacNo( vacNo: number ): Observable<any> {
    return this.http.get(this._urlBase + 'claim/vacNo=' + vacNo );
  }

  getClaimByClaimantNino( nino: string ): Observable<any> {
    return this.http.get(this._urlBase + 'claim/claimantNino=' + nino );
  }

  getClaimByClaimantSurname( surname: string ): Observable<any> {
    return this.http.get(this._urlBase + 'claim/claimantSurname=' + surname );
  }

  getClaimByVaccinatedPersonNino( nino: string ): Observable<any> {
    return this.http.get(this._urlBase + 'claim/vaccinatedPersonNino=' + nino );
  }

  getClaimByVaccinatedPersonSurname( surname: string ): Observable<any> {
    return this.http.get(this._urlBase + 'claim/vaccinatedPersonSurname=' + surname );
  }

  getAllTitles(): Observable<any> {
    return this.http.get( this._urlBase + 'title/getall');
  }

  getAllReferences(): Observable<any> {
    return this.http.get( this._urlBase + 'references/getall');
  }

  updateClaim(claim: any): Observable<any> {
    return this.http.put(this._urlBase + 'claim/update', claim);
  }
}
