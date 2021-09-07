import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FlightSearchService } from '../services/flight-search.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-flight-show',
  templateUrl: './flight-show.component.html',
  styleUrls: ['./flight-show.component.css']
})
export class FlightShowComponent implements OnInit {
  public flightSearchForm: any;
  public availableFlights:any;

  constructor(
    private fb: FormBuilder,
    private flightSearchService: FlightSearchService,
    private router:Router,
   
  ) {
    this.createForm();
  }
  ngOnInit(): void {
 //  throw new Error('Method not implemented.');
  }

  createForm() {
    this.flightSearchForm = this.fb.group({
      source: '',
      destination: '',
      departureDate: '',
      arrivalDate:''
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
  myClickFunction(flightId: any){
    
  
    console.log(flightId)
    alert("is booked");
    this.router.navigateByUrl('/bookingdetails')
  }
}
