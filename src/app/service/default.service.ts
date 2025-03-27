import { Injectable } from '@angular/core';
import { envirioment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Armor, ChClass, God, Magic, Origin, Power, Proficiency, Race, Shild, Skill, Weapon } from '../models/default.model';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {
  private URL = envirioment.apiURL;

  constructor(private http: HttpClient) { }

  getAllRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(this.URL + "race");
  }

  getAllArmors(): Observable<Armor[]> {
    return this.http.get<Armor[]>(this.URL + "armor");
  }

  getAllChClass(): Observable<ChClass[]> {
    return this.http.get<ChClass[]>(this.URL + "chclass");
  }

  getAllGods(): Observable<God[]> {
    return this.http.get<God[]>(this.URL + "god");
  }

  getAllMagics(): Observable<Magic[]> {
    return this.http.get<Magic[]>(this.URL + "magic");
  }

  getAllOrigins(): Observable<Origin[]> {
    return this.http.get<Origin[]>(this.URL + "origin");
  }

  getAllPowers(): Observable<Power[]> {
    return this.http.get<Power[]>(this.URL + "power");
  }

  getAllProficiencies(): Observable<Proficiency[]> {
    return this.http.get<Proficiency[]>(this.URL + "proficiency");
  }

  getAllShilds(): Observable<Shild[]> {
    return this.http.get<Shild[]>(this.URL + "shild");
  }

  getAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.URL + "skill");
  }

  getAllWeapons(): Observable<Weapon[]> {
    return this.http.get<Weapon[]>(this.URL + "weapon");
  }
}
