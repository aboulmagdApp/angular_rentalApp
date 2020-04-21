import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';
@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
rental: Rental;
  constructor(
    private rentalService:RentalService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
     const rentalId = params['rentalId'];
     this.rentalService.getRentalById(rentalId)
     .subscribe(rental =>{
      this.rental = rental;
     })
    })
  }

}
