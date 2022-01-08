import {Injectable} from "@angular/core";
import {DataPersistence} from "@nrwl/angular";
import {VenuesPartialState} from "./venues.reducer";
import {Effect} from "@ngrx/effects";
import {FetchMoreVenues, FetchVenuesSuccess, VenuesActionTypes} from "./venues.actions";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {VenueSearchResponse} from "@venues/api";

@Injectable()
export class VenuesEffects {
  private baseUrl = '/proxy/burger-venue/api';

  constructor(
    private httpClient: HttpClient,
    private dataPersistence: DataPersistence<VenuesPartialState>
  ) {}

  @Effect() fetchVenues$ = this.dataPersistence.fetch(
    VenuesActionTypes.FetchVenues,
    {
      run: () => {
        return this.httpClient
          .get(this.baseUrl + '/venues')
          .pipe(
            map(resp => {
              return new FetchVenuesSuccess(resp as VenueSearchResponse);
            })
          );
      }
    }
  )

  @Effect() fetchMoreVenues$ = this.dataPersistence.fetch(
    VenuesActionTypes.FetchMoreVenues,
    {
      run: (action: FetchMoreVenues) => {
        console.log(action.cursor);
        return this.httpClient
          .get(this.baseUrl + '/venues/cursor/' + action.cursor)
          .pipe(
            map(resp => {
              return new FetchVenuesSuccess(resp as VenueSearchResponse);
            })
          );
      }
    }
  )

}
