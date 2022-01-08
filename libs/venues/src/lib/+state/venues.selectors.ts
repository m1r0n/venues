import {createFeatureSelector, createSelector} from "@ngrx/store";
import {VENUES_FEATURE_KEY, VenuesState} from "./venues.reducer";

export const getVenuesState = createFeatureSelector<VenuesState>(VENUES_FEATURE_KEY);

export const fetchVenues = createSelector(
  getVenuesState,
  (state: VenuesState) => state.venues
);

export const fetchCursor = createSelector(
  getVenuesState,
  (state: VenuesState) => state.cursor
);

export const fetchLoading = createSelector(
  getVenuesState,
  (state: VenuesState) => state.loading
);
