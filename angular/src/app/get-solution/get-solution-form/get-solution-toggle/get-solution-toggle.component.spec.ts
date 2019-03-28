import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSolutionToggleComponent } from './get-solution-toggle.component';

describe('GetSolutionToggleComponent', () => {
  let component: GetSolutionToggleComponent;
  let fixture: ComponentFixture<GetSolutionToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSolutionToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSolutionToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
