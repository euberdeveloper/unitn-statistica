import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSolutionFormComponent } from './get-solution-form.component';

describe('GetSolutionFormComponent', () => {
  let component: GetSolutionFormComponent;
  let fixture: ComponentFixture<GetSolutionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSolutionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSolutionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
