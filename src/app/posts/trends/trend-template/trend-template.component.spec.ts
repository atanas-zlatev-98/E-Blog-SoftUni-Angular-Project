import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendTemplateComponent } from './trend-template.component';

describe('TrendTemplateComponent', () => {
  let component: TrendTemplateComponent;
  let fixture: ComponentFixture<TrendTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
