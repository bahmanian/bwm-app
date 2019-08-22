import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { TempComponent } from './temp/temp.component';
import { RentalComponent } from './rental/rental.component';
import { RentalModule } from './rental/rental.module';
import { RentalService } from './shared/rental.service';

const routes = [
  // {path: '', component: RentalComponent},
  {path: '', redirectTo: '/rentals', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RentalModule
  ],
  providers: [
    RentalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
