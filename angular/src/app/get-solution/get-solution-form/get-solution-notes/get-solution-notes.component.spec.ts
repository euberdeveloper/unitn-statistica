import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSolutionNotesComponent } from './get-solution-notes.component';

describe('GetSolutionNotesComponent', () => {
  let component: GetSolutionNotesComponent;
  let fixture: ComponentFixture<GetSolutionNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSolutionNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSolutionNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
