import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyPlannerPage } from './journey-planner.page';

describe('JourneyPlannerPage', () => {
  let component: JourneyPlannerPage;
  let fixture: ComponentFixture<JourneyPlannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyPlannerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyPlannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
