import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlightSearchService } from './services/flight-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public flightSearchForm: any;
  public availableFlights:any;

  constructor(
    private fb: FormBuilder,
    private flightSearchService: FlightSearchService
  ) {
    this.createForm();
  }

  createForm() {
    this.flightSearchForm = this.fb.group({
      source: '',
      destination: '',
      departureDate: '',
    });
  }

  onSubmit() {
    this.flightSearchService.getFlightDetails(this.flightSearchForm.value).subscribe(resp => {
      this.availableFlights = resp;
    }, error => console.log(error))
  }

  onBookNow(flight:any){
    alert(`${flight.flightDetails.companyName} from ${this.flightSearchForm.value.source} to ${this.flightSearchForm.value.destination} will be confirmed shortly.`);
  }
}
