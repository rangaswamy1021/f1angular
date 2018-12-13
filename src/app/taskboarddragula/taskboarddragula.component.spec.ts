import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskboarddragulaComponent } from './taskboarddragula.component';

describe('TaskboarddragulaComponent', () => {
  let component: TaskboarddragulaComponent;
  let fixture: ComponentFixture<TaskboarddragulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskboarddragulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskboarddragulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
