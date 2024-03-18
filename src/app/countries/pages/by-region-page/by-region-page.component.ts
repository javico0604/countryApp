import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/regin.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public countries:Country[] = []
  public regions:Region[] = ['Africa', 'Americas', 'Asia', 'Europa', 'Oceania']
  public selectedRegion?:Region;

  constructor(private countyService:CountryService){}

  searchByRegion(term:Region){
    this.selectedRegion = term

    this.countries = []
    this.countyService.searchRegion(term).subscribe(datos => this.countries = datos)
  }
}
