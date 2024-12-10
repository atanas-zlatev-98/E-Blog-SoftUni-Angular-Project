import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTrendSingleComponent } from './crypto-trend-single.component';

describe('CryptoTrendSingleComponent', () => {
  let component: CryptoTrendSingleComponent;
  let fixture: ComponentFixture<CryptoTrendSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoTrendSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoTrendSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
