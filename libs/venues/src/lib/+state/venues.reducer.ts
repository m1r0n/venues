import {VenuesAction, VenuesActionTypes} from "./venues.actions";
import {Venue} from "@venues/api";

export const VENUES_FEATURE_KEY = 'venues';

export interface VenuesState {
  cursor: string;
  venues: Array<Venue>;
  loading: boolean;
}

export interface VenuesPartialState {
  readonly [VENUES_FEATURE_KEY]: VenuesState
}

export const initialState: VenuesState = {
  cursor: '',
  venues: [],
  loading: false,
}

export function venuesReducer(
  state: VenuesState = initialState,
  action: VenuesAction
) {
  switch (action.type) {
    case VenuesActionTypes.FetchVenues:
    case VenuesActionTypes.FetchMoreVenues:
      return {
        ...state,
        loading: true,
      };
    case VenuesActionTypes.FetchVenuesSuccess:
      return {
        ...state,
        cursor: action.response.cursor,
        venues: state.venues.concat(action.response.venues),
        loading: false,
      }
    default:
      return state;
  }
}
