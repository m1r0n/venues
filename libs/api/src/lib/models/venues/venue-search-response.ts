import {Venue} from "@venues/api";

export interface VenueSearchResponse {
  cursor: string;
  venues: Array<Venue>;
}
