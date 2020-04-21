import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalListingComponent } from './rental-listing/rental-listing.component';
import { RentalComponent } from './rental.component';
import { RentalCardComponent } from '../shared/rental-card/rental-card.component';
import { UppercasePipe, FirstUpperLetterPipe } from '../shared/pipes/uppercase.pipe';
import { HighlightDirective } from '../shared/directives/custom.directive';

const routes : Routes = [
  {
    path:'rentals',
    component: RentalComponent,
    children:[
      {path: '', component: RentalListingComponent},
      {path: ':rentalId', component: RentalDetailComponent}
    ]
  }
]

@NgModule({
  declarations:[
    RentalDetailComponent,
    RentalListingComponent,
    RentalComponent,
    RentalCardComponent,
    UppercasePipe,
    FirstUpperLetterPipe,
    HighlightDirective
  ],
  imports: [
   RouterModule.forChild(routes),
   CommonModule
  ]
})
export class RentalModule { }
