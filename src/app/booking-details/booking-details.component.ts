import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { BookingDetailsService } from '../services/booking-details.service';


@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  public bookingSearchForm: any;
  public availableBookings:any;

  constructor(
    private fb: FormBuilder,
    private bookingDetailsService: BookingDetailsService,
    private router:Router,
   
  ) {
    this.createForm();
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  createForm() {
    this.bookingSearchForm = this.fb.group({
      ssn:'',
      pnr: '',
      username: '',
      noOfSeats: '',
      travelDate:'',
      bookingDate:'',
    });
  }

  onSubmit() {
    this.bookingDetailsService.getBookingDetails(this.bookingSearchForm.value).subscribe((resp: any) => {
      this.availableBookings = resp;
    }, (error: any) => console.log(error))
  }

  onBookNow(booking:any){
    alert(`${booking.passengers.firstName} from ${this.bookingSearchForm.value.userName}`);
  }
  myClickFunction(event:any){
    
    alert("booking confirmed!");
    this.router.navigateByUrl('/booked')
  }
}

