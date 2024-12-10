import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTrendComponent } from './crypto-trend.component';

describe('CryptoTrendComponent', () => {
  let component: CryptoTrendComponent;
  let fixture: ComponentFixture<CryptoTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoTrendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
