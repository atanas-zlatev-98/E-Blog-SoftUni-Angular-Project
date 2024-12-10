import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTrendComponent } from './single-trend.component';

describe('SingleTrendComponent', () => {
  let component: SingleTrendComponent;
  let fixture: ComponentFixture<SingleTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleTrendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
