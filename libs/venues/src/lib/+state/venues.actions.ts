import {Action} from "@ngrx/store";
import {VenueSearchResponse} from "@venues/api";

export enum VenuesActionTypes {
  FetchVenues = '[Venues] Fetch Venues',
  FetchMoreVenues = '[Venues] Fetch More Venues',
  FetchVenuesSuccess = '[Venues] Fetch Venues Success',
}

export class FetchVenues implements Action {
  readonly type = VenuesActionTypes.FetchVenues;
}

export class FetchMoreVenues implements Action {
  readonly type = VenuesActionTypes.FetchMoreVenues;

  constructor(
    public cursor: string
  ) {}
}

export class FetchVenuesSuccess implements Action {
  readonly type = VenuesActionTypes.FetchVenuesSuccess;

  constructor(
    public response: VenueSearchResponse
  ) {}
}

export type VenuesAction =
  | FetchVenues
  | FetchMoreVenues
  | FetchVenuesSuccess
