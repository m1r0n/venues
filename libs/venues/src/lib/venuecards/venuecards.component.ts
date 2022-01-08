import { Component, OnInit } from '@angular/core';
import {VenuesFacade} from '../+state/venues.facade';

@Component({
  selector: 'venues-venuecards',
  templateUrl: './venuecards.component.html',
  styleUrls: ['./venuecards.component.scss']
})
export class VenuecardsComponent implements OnInit {

  constructor(
    private facade: VenuesFacade
  ) {}

  venues$ = this.facade.venues$;
  loading$ = this.facade.loading$;
  cursor = '';

  ngOnInit(): void {
    this.facade.fetchVenues();
    this.facade.cursor$.pipe().subscribe(cursor => this.cursor = cursor);
  }

  loadMore(): void {
    this.facade.fetchMoreVenues(this.cursor);
  }
}
