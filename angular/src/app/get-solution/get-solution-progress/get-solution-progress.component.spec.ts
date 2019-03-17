import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSolutionProgressComponent } from './get-solution-progress.component';

describe('GetSolutionProgressComponent', () => {
  let component: GetSolutionProgressComponent;
  let fixture: ComponentFixture<GetSolutionProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSolutionProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSolutionProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
