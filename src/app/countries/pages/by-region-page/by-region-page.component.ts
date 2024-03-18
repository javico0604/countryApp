import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
  
  public regions:Country[] = []

  constructor(private countyService:CountryService){}

  searchByRegion(term:string){
    this.regions = []
    this.countyService.searchRegion(term).subscribe(datos => this.regions = datos)
  }
}
