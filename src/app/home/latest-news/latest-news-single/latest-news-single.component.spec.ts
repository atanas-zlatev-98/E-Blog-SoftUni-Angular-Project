import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsSingleComponent } from './latest-news-single.component';

describe('LatestNewsSingleComponent', () => {
  let component: LatestNewsSingleComponent;
  let fixture: ComponentFixture<LatestNewsSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestNewsSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestNewsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
