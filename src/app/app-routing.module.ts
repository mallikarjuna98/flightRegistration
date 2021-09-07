import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookedComponent } from './booked/booked.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { FlightShowComponent } from './flight-show/flight-show.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path: '', redirectTo:'home',pathMatch:'full'},
{path:'flightshow',component:FlightShowComponent},
{path:'bookingdetails',component:BookingDetailsComponent},
{path:'home',component:HomeComponent},
{path:'header',component:HeaderComponent},
{path:'footer',component:FooterComponent},
{path:'login',component:LoginComponent},
{path:'booked',component:BookedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
