import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightShowComponent } from './flight-show.component';

describe('FlightShowComponent', () => {
  let component: FlightShowComponent;
  let fixture: ComponentFixture<FlightShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
