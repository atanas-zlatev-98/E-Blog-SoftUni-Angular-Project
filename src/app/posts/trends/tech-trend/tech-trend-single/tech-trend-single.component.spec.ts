import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTrendSingleComponent } from './tech-trend-single.component';

describe('TechTrendSingleComponent', () => {
  let component: TechTrendSingleComponent;
  let fixture: ComponentFixture<TechTrendSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechTrendSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechTrendSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
