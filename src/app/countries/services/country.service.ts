import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountryService {

  private url:string = 'https://restcountries.com/v3.1'

  constructor(private httpClient: HttpClient) { }

  private getCountryRequest(url:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
           .pipe(
            catchError(() => of([]))
           );
  }

  searchCountryByAlphaCode(code:string):Observable<Country | null>{
    const url = `${this.url}/alpha/${code}`;

    return this.httpClient.get<Country[]>(url)
          .pipe(
            map(countries => countries.length > 0 ? countries[0] : null),
            catchError( () => of(null) )
          );
  }

  searchCapital(term:string):Observable<Country[]>{
    return this.getCountryRequest(`${this.url}/capital/${term}`)
  }

  searchCountry(term:string):Observable<Country[]>{
    return this.getCountryRequest(`${this.url}/name/${term}`)
  }

  searchRegion(term:string):Observable<Country[]>{
    return this.getCountryRequest(`${this.url}/region/${term}`)
  }
}
