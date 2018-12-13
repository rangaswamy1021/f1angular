import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAreaChartsComponent } from './line-area-charts.component';

describe('LineAreaChartsComponent', () => {
  let component: LineAreaChartsComponent;
  let fixture: ComponentFixture<LineAreaChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineAreaChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineAreaChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
