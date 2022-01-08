import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {VenuesPartialState} from "./venues.reducer";
import {fetchCursor, fetchLoading, fetchVenues} from "./venues.selectors";
import {FetchMoreVenues, FetchVenues} from "./venues.actions";

@Injectable({
  providedIn: 'root'
})
export class VenuesFacade {

  venues$ = this.store.pipe(select(fetchVenues));
  cursor$ = this.store.pipe(select(fetchCursor));
  loading$ = this.store.pipe(select(fetchLoading));

  constructor(private store: Store<VenuesPartialState>) {}

  fetchVenues() {
    this.store.dispatch(new FetchVenues());
  }

  fetchMoreVenues(cursor: string) {
    this.store.dispatch(new FetchMoreVenues(cursor));
  }

}
