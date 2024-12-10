import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTrendComponent } from './tech-trend.component';

describe('TechTrendComponent', () => {
  let component: TechTrendComponent;
  let fixture: ComponentFixture<TechTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechTrendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
