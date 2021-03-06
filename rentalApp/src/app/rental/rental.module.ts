import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalListingComponent } from './rental-listing/rental-listing.component';
import { RentalComponent } from './rental.component';
import { RentalCardComponent } from '../shared/rental-card/rental-card.component';
import { UppercasePipe, FirstUpperLetterPipe } from '../shared/pipes/uppercase.pipe';
import { HighlightDirective, NgIfDirective, appNgForDirective } from '../shared/directives/custom.directive';
import { RentalSecretComponent } from './rental-secret/rental-secret.component';
import { AuthGuard } from '../auth/shared/auth.gurd';
import { MapModule } from '../shared/modules/map/map.module';


const routes : Routes = [
  {
    path:'rentals',
    component: RentalComponent,
    children:[
      {path: '', component: RentalListingComponent},
      {path: 'secret', component: RentalSecretComponent, canActivate: [AuthGuard]},
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
    HighlightDirective,
    NgIfDirective,
    appNgForDirective,
    RentalSecretComponent
  ],
  imports: [
   RouterModule.forChild(routes),
   CommonModule,
   HttpClientModule,
   MapModule
  ]
})
export class RentalModule { }
