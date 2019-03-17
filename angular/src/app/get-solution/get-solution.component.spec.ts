import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSolutionComponent } from './get-solution.component';

describe('GetSolutionComponent', () => {
  let component: GetSolutionComponent;
  let fixture: ComponentFixture<GetSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
