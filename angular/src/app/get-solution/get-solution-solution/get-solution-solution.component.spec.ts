import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSolutionSolutionComponent } from './get-solution-solution.component';

describe('GetSolutionSolutionComponent', () => {
  let component: GetSolutionSolutionComponent;
  let fixture: ComponentFixture<GetSolutionSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSolutionSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSolutionSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
