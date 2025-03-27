import { Injectable } from '@angular/core';
import { envirioment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private URL = envirioment.apiURL + 'character';

  constructor(private http: HttpClient) { }

  createCharacter(character: any): Observable<any> {
    return this.http.post(this.URL, character);
  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get(`${this.URL}/${id}`);
  }
}
