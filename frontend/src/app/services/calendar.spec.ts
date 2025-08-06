import { TestBed } from '@angular/core/testing';

import { CalendarService } from './calendar';

describe('Calendar', () => {
  let service: Calendar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Calendar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
