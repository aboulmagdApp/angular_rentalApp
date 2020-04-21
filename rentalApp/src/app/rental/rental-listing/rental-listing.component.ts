import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model'
import { RentalService } from '../shared/rental.service';

import { IRental, AppStorage } from "../shared/rental.interface";

@Component({
  selector: 'app-rental-listing',
  templateUrl: './rental-listing.component.html',
  styleUrls: ['./rental-listing.component.css']
})
export class RentalListingComponent implements OnInit, IRental {
  rentals: Rental[] = [];

  someData = 'some data';
  isLoaded = false;

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    const appStorange = new AppStorage<number>();
    
    this.rentalService.getRentals().subscribe((rentals: Rental[]) => {
      this.rentals = rentals;
    });
  }

  implementMe() {
    return '';
  }

}
