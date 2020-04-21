import { Injectable } from '@angular/core';
import { Rental } from './rental.model';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
 rentals: Rental[] = [
    {
      _id: '1',
      title: 'central Apartment',
      city: 'new yourk',
      street: 'times square',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      numOfRooms: 3,
      description: 'very nice apartment',
      dailyPrice: 34,
      shared: false,
      createdAt: '1/1/2020'
    },
    {
      _id: '2',
      title: 'Central Apartment 2',
      city: "san francisco",
      street: "Main street",
      category: "condo",
      image: "http://via.placeholder.com/350x250",
      numOfRooms: 2,
      description: "Very nice apartment",
      dailyPrice: 12,
      shared: true,
      createdAt: "24/12/2017"
    },
    {
      _id: "3",
      title: "Central Apartment 3",
      city: "bratislava",
      street: "Hlavna",
      category: "condo",
      image: "http://via.placeholder.com/350x250",
      numOfRooms: 2,
      description: "Very nice apartment",
      dailyPrice: 334,
      shared: true,
      createdAt: "24/12/2017"
    },
    {
      _id: "4",
      title: "Central Apartment 4",
      city: "berlin",
      street: "Haupt strasse",
      category: "house",
      image: "http://via.placeholder.com/350x250",
      numOfRooms: 9,
      description: "Very nice apartment",
      dailyPrice: 33,
      shared: true,
      createdAt: "24/12/2017"
    }]
 
    getRentalById(rentalId: string): Observable<Rental> {
      return new Observable(observer => {
        const rental = this.rentals.find(rental => rental._id === rentalId)
        setTimeout(() => {
          console.log(rental);
          observer.next(rental);
        },100);
      })
    }
    getRentals(): Observable<Rental[]> {
     return new Observable(observer =>{
      setTimeout(() =>{
        observer.next(this.rentals);
      }, 100);
     })
    }

}
