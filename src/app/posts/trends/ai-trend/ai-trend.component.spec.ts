import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTrendComponent } from './ai-trend.component';

describe('AiTrendComponent', () => {
  let component: AiTrendComponent;
  let fixture: ComponentFixture<AiTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiTrendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
