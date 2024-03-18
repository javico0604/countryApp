import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {
  public countries:Country[] = []

  constructor(private countyService:CountryService){}

  searchByCountry(term:string){
    this.countries = []
    this.countyService.searchCountry(term).subscribe(datos => this.countries = datos)
  }
}
