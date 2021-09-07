import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {
  [x: string]: any;

  private envUrl = 'http://localhost:8090'
  constructor(private http: HttpClient) { }


  getBookingDetails(params:any){
    return this.http.get(this.envUrl+`username/${params.username}`);
  }
}