import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { FlightSearchComponent } from './flight-search/flight-search/flight-search.component';
import { FlightShowComponent } from './flight-show/flight-show.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BookedComponent } from './booked/booked.component';

@NgModule({
  declarations: [
    AppComponent,
    //FlightSearchComponent,
    FlightShowComponent,
    BookingDetailsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BookedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
