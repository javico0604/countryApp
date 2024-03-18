import { Component} from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public countries:Country[] = []
  public isLoading:boolean = false

  constructor(private countyService:CountryService){}

  searchByCapital(term:string){

    this.isLoading = true

    this.countries = []
    this.countyService.searchCapital(term).subscribe(
      datos => {this.countries = datos,
                this.isLoading = false})
  }
}
