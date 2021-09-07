import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {

  private envUrl = 'http://localhost:8089/'
  constructor(private http: HttpClient) { }


  getFlightDetails(params:any){
    return this.http.get(this.envUrl+`source/${params.source}/destination/${params.destination}`);
  }
}
