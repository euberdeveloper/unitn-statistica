import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSolutionAdsenseComponent } from './get-solution-adsense.component';

describe('GetSolutionAdsenseComponent', () => {
  let component: GetSolutionAdsenseComponent;
  let fixture: ComponentFixture<GetSolutionAdsenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSolutionAdsenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSolutionAdsenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
