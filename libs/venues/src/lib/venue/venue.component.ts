import {Component, Input} from '@angular/core';

@Component({
  selector: 'venues-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent {

  @Input() name = '';
  @Input() description = '';
  @Input() photoUrl = '';

}
