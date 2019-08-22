import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { RentalModel } from './rental.model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private rentals: RentalModel[] = [
    {
      id: '1',
      title: 'Central Apartment',
      city: 'New York',
      street: 'Times Square',
      category: 'apartment',
      image: 'http://via.placeholder.com/350*250',
      bedrooms: 3,
      description: 'Very nice apartment',
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    },
    {
      id: '2',
      title: 'Central Apartment 2',
      city: 'San Francisco',
      street: 'Main Street',
      category: 'condo',
      image: 'http://via.placeholder.com/350*250',
      bedrooms: 2,
      description: 'Very nice apartment',
      dailyRate: 12,
      shared: true,
      createdAt: '24/12/2017'
    },
    {
      id: '3',
      title: 'Central Apartment',
      city: 'Bratislava',
      street: 'Hlavna',
      category: 'condo',
      image: 'http://via.placeholder.com/350*250',
      bedrooms: 2,
      description: 'Very nice apartment',
      dailyRate: 34,
      shared: true,
      createdAt: '24/12/2017'
    },
    {
      id: '4',
      title: 'Central Apartment 4',
      city: 'Berlin',
      street: 'Haupt strasse',
      category: 'house',
      image: 'http://via.placeholder.com/350*250',
      bedrooms: 3,
      description: 'Very nice apartment',
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    }
  ];

  public testFunction(): string {
    return 'lolololo';
  }

  public getRentalById(rentalId: string): Observable<RentalModel> {
    return new Observable<RentalModel>((observer) => {
      setTimeout(() => {
        const foundedRental = this.rentals.find((rental) => {
          return rental.id === rentalId;
        });
        observer.next(foundedRental);
      }, 500);
    });
  }

  public getRentals(): Observable<RentalModel[]> {
    // const rentalObservable: Observable<RentalModel[]> = new Observable((observer) => {
    return new Observable<RentalModel[]>((observer) => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);

      // setTimeout(() => {
      //   observer.error('ERROR!!!');
      // }, 2000);
      //
      // setTimeout(() => {
      //   observer.complete();
      // }, 1000);
    });
    // return rentalObservable;
  }
}
