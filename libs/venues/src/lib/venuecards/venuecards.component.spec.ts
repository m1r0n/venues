import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuecardsComponent } from './venuecards.component';

describe('VenuecardsComponent', () => {
  let component: VenuecardsComponent;
  let fixture: ComponentFixture<VenuecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenuecardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
