import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RentalService} from '../../shared/rental.service';
import {RentalModel} from '../../shared/rental.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  // rId: Observable<string>;
  // id: string;
  currentId: string;
  rental: RentalModel;

  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService
  ) {
  }

  ngOnInit() {
    this.rental = new RentalModel();
    // Method one:
    /*this.rId = this.route.paramMap.pipe(map(paramPam => paramPam.get('rentalId')));
    this.id = this.route.snapshot.paramMap.get('rentalId');*/

    // Method two:
    this.route.params.subscribe(
      (params) => {
        console.log(params);
        // debugger;
        // this.currentId = params.rentalId;
        this.getRental(params.rentalId);
      }
    );
  }

  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe((rental: RentalModel) => {
      this.rental = rental;
    });
  }

}
