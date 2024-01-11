import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SanctionedEntity } from '../models/sanctioned-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SanctionedEntitiesService {

 // private readonly apiUrl: string;
  //private readonly path = 'sanctioned-entities';

  constructor(private http: HttpClient, ) {
   // this.apiUrl = 'https://localhost:7169/' + 'api/';
  }

  public getSanctionedEntities(): Observable<SanctionedEntity[]> {
    //this.apiUrl = 'https://localhost:7169/api/sanctioned-entities';
    const url = 'https://localhost:7169/api/sanctioned-entities';
    return this.http.get<SanctionedEntity[]>(url);
  }
}
