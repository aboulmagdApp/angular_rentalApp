import { Injectable } from '@angular/core';
import { Rental } from './rental.model';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
 
 constructor(private http: HttpClient) {
 }

    getRentalById(rentalId: string): Observable<Rental> {
      return this.http.get<Rental>(`http://localhost:4200/api/v1/rentals/${rentalId}`);
    }
    getRentals(): Observable<Rental[]> {
     return this.http.get<Rental[]>(`http://localhost:4200/api/v1/rentals`);
    }

}
