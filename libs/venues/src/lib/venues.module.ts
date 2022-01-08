import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueComponent } from './venue/venue.component';
import {StoreModule} from "@ngrx/store";
import {VENUES_FEATURE_KEY, venuesReducer} from "./+state/venues.reducer";
import {VenuesFacade} from "./+state/venues.facade";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {EffectsModule} from "@ngrx/effects";
import {VenuesEffects} from "./+state/venues.effects";
import {ApiModule} from "@venues/api";
import {MatGridListModule} from "@angular/material/grid-list";
import { VenuecardsComponent } from './venuecards/venuecards.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { LoadingBarComponent } from './loading-bar/loading-bar.component';

@NgModule({
  imports: [
    ApiModule,
    CommonModule,
    StoreModule.forFeature(VENUES_FEATURE_KEY, venuesReducer),
    EffectsModule.forFeature([VenuesEffects]),
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  exports: [VenuecardsComponent],
  declarations: [
    VenueComponent,
    VenuecardsComponent,
    LoadingBarComponent,
  ],
  providers: [VenuesFacade]
})
export class VenuesModule {}
