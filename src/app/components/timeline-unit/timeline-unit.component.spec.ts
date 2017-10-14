import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineUnitComponent } from './timeline-unit.component';

describe('TimelineUnitComponent', () => {
  let component: TimelineUnitComponent;
  let fixture: ComponentFixture<TimelineUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
